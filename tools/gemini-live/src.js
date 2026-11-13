// Source for vendor/gemini-live.js — the live voice interviewer (Google Gemini Live API via Firebase AI Logic).
// Build: node tools/gemini-live/build.js   (bundles the Firebase SDK into one file; no build step at runtime)
//
// window.GeminiLive.start(opts) → Promise<controller>
//   opts.firebase   Firebase web config { apiKey, projectId, appId, ... }
//   opts.appCheck   { siteKey } for reCAPTCHA Enterprise, or { debugToken } for the beta
//   opts.model      Live model name; opts.voice prebuilt voice name; opts.system system instruction; opts.opening first prompt
//   opts.onText(role, text, final)   live transcript: role 'ai' | 'me'
//   opts.onState(state)              'connecting' | 'listening' | 'speaking' | 'ended' | 'error'
// controller: { stop(), mute(on), say(text) }
// window.GeminiLive.write(opts, prompt) → Promise<string>  (one-off written answer, used for the feedback report)
import { initializeApp, getApps } from 'firebase/app';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, CustomProvider } from 'firebase/app-check';
import { getAI, getGenerativeModel, getLiveGenerativeModel, GoogleAIBackend, ResponseModality } from 'firebase/ai';

const IN_RATE = 16000, OUT_RATE = 24000;
let ai = null;

function setup(opts) {
  if (ai) return ai;
  const app = getApps()[0] || initializeApp(opts.firebase);
  const ac = opts.appCheck || {};
  if (ac.debugToken) self.FIREBASE_APPCHECK_DEBUG_TOKEN = ac.debugToken;
  initializeAppCheck(app, {
    provider: ac.siteKey && !ac.debugToken ? new ReCaptchaEnterpriseProvider(ac.siteKey)
      : new CustomProvider({ getToken: () => Promise.reject(new Error('no attestation provider')) }),
    isTokenAutoRefreshEnabled: true
  });
  ai = getAI(app, { backend: new GoogleAIBackend() });
  return ai;
}

// Microphone → 16 kHz 16-bit PCM chunks (same approach as the SDK's own helper).
const WORKLET = `class P extends AudioWorkletProcessor{constructor(o){super();this.t=o.processorOptions.t;this.muted=false;this.port.onmessage=e=>{this.muted=!!e.data.muted}}
process(i){const x=i[0];if(x&&x[0]&&x[0].length&&!this.muted){const d=x[0],n=Math.round(d.length*this.t/sampleRate),r=d.length/n,o=new Int16Array(n);
for(let k=0;k<n;k++){const s=Math.max(-1,Math.min(1,d[Math.floor(k*r)]));o[k]=s<0?s*32768:s*32767}this.port.postMessage(o)}return true}}registerProcessor('ie-mic',P);`;

function b64(u8) { let s = ''; for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000)); return btoa(s); }

async function start(opts) {
  const state = s => { try { opts.onState && opts.onState(s); } catch (e) {} };
  state('connecting');
  setup(opts);
  // Audio must start from a tap: create the context first, then ask for the mic.
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  if (ctx.state === 'suspended') await ctx.resume();
  let stream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 } });
  } catch (e) { ctx.close(); const err = new Error('mic'); err.code = 'mic'; throw err; }

  const model = getLiveGenerativeModel(ai, {
    model: opts.model,
    systemInstruction: opts.system,
    generationConfig: {
      responseModalities: [ResponseModality.AUDIO],
      speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: opts.voice } } },
      inputAudioTranscription: {},
      outputAudioTranscription: {}
    }
  });
  let session;
  try { session = await model.connect(); }
  catch (e) { console.warn('live connect failed', opts.model, e && e.message, e && e.customErrorData ? JSON.stringify(e.customErrorData) : ''); stream.getTracks().forEach(t => t.stop()); ctx.close(); throw e; }

  const url = URL.createObjectURL(new Blob([WORKLET], { type: 'application/javascript' }));
  await ctx.audioWorklet.addModule(url);
  const src = ctx.createMediaStreamSource(stream);
  const node = new AudioWorkletNode(ctx, 'ie-mic', { processorOptions: { t: IN_RATE } });
  src.connect(node);
  let stopped = false;
  node.port.onmessage = e => { if (!stopped) session.sendAudioRealtime({ mimeType: 'audio/pcm;rate=16000', data: b64(new Uint8Array(e.data.buffer)) }).catch(() => {}); };

  // Playback of the interviewer's voice, queued gap-free.
  let next = 0; const playing = new Set();
  const play = buf => {
    const pcm = new Int16Array(buf), ab = ctx.createBuffer(1, pcm.length, OUT_RATE), ch = ab.getChannelData(0);
    for (let i = 0; i < pcm.length; i++) ch[i] = pcm[i] / 32768;
    const s = ctx.createBufferSource(); s.buffer = ab; s.connect(ctx.destination);
    next = Math.max(ctx.currentTime + 0.03, next); s.start(next); next += ab.duration;
    playing.add(s); state('speaking');
    s.onended = () => { playing.delete(s); if (!playing.size && !stopped) state('listening'); };
  };
  const hush = () => { playing.forEach(s => { try { s.stop(0); } catch (e) {} }); playing.clear(); next = ctx.currentTime; };

  let aiText = '', meText = '';
  const flush = who => {
    if (who !== 'me' && aiText) { opts.onText && opts.onText('ai', aiText, true); aiText = ''; }
    if (who !== 'ai' && meText) { opts.onText && opts.onText('me', meText, true); meText = ''; }
  };
  (async () => {
    try {
      for await (const m of session.receive()) {
        if (stopped) break;
        if (m.type === 'goingAwayNotice') { opts.onText && opts.onText('sys', 'The session is about to time out.', true); continue; }
        if (m.type !== 'serverContent') continue;
        if (m.interrupted) { hush(); flush('ai'); }
        if (m.inputTranscription && m.inputTranscription.text) { if (aiText) flush('ai'); meText += m.inputTranscription.text; opts.onText && opts.onText('me', meText, false); }
        if (m.outputTranscription && m.outputTranscription.text) { if (meText) flush('me'); aiText += m.outputTranscription.text; opts.onText && opts.onText('ai', aiText, false); }
        const parts = (m.modelTurn && m.modelTurn.parts) || [];
        for (const p of parts) {
          if (p.inlineData && /^audio\//.test(p.inlineData.mimeType || '')) play(Uint8Array.from(atob(p.inlineData.data), c => c.charCodeAt(0)).buffer);
        }
        if (m.turnComplete) flush('ai');
      }
    } catch (e) { if (!stopped) { state('error'); opts.onError && opts.onError(e); } }
    if (!stopped) { flush(); state('ended'); }
  })();

  if (opts.opening) session.send(opts.opening, true).catch(() => {});
  state('listening');
  return {
    mute(on) { node.port.postMessage({ muted: !!on }); },
    say(text) { hush(); return session.send(text, true); },
    async stop() {
      if (stopped) return; stopped = true; flush(); hush();
      try { node.port.onmessage = null; node.disconnect(); src.disconnect(); } catch (e) {}
      stream.getTracks().forEach(t => t.stop());
      try { await session.close(); } catch (e) {}
      try { await ctx.close(); } catch (e) {}
      state('ended');
    }
  };
}

async function write(opts, prompt, system) {
  setup(opts);
  const m = getGenerativeModel(ai, { model: opts.textModel, systemInstruction: system });
  const r = await m.generateContent(prompt);
  return r.response.text();
}

window.GeminiLive = { start, write };
