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

// One interviewer turn without the live socket: the candidate's recorded answer (audio) + the conversation so far
// go to the text model, which understands accents from the audio itself; the reply streams back as text.
// history: [{ role: 'user'|'model', text }]. Returns { text, heard } — heard = what the model transcribed.
async function turn(opts, { system, history, audio, mime, note, onText }) {
  setup(opts);
  const m = getGenerativeModel(ai, { model: opts.textModel, systemInstruction: system, generationConfig: { temperature: 0.8, maxOutputTokens: 400 } });
  const contents = (history || []).map(h => ({ role: h.role, parts: [{ text: h.text }] }));
  const parts = [];
  if (audio) parts.push({ inlineData: { mimeType: mime || 'audio/webm', data: audio } });
  parts.push({ text: (note || '') + (audio ? '\n[The audio is the candidate speaking. First write exactly what they said on one line starting with "HEARD: ", then a line "SAY: " followed by your spoken reply as the interviewer.]' : '\n[Reply with a line starting "SAY: " followed by your spoken reply.]') });
  contents.push({ role: 'user', parts });
  const r = await m.generateContentStream({ contents });
  let full = '';
  for await (const c of r.stream) {
    let t = ''; try { t = c.text(); } catch (e) {}
    if (!t) continue; full += t;
    const say = (full.split(/SAY:\s*/)[1] || '');
    if (onText && say) onText(say);
  }
  const heard = ((full.match(/HEARD:\s*([\s\S]*?)(?:\n|SAY:)/) || [])[1] || '').trim();
  const text = ((full.split(/SAY:\s*/)[1]) || full.replace(/HEARD:[^\n]*\n?/, '')).trim();
  return { text, heard };
}

// Natural speech from Gemini's text-to-speech model. Returns base64 16-bit PCM at 24 kHz (or null if unavailable).
async function speech(opts, text, voice) {
  setup(opts);
  const m = getGenerativeModel(ai, { model: opts.ttsModel, generationConfig: { responseModalities: ['AUDIO'], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voice } } } } });
  const r = await m.generateContent(text);
  const p = (((r.response.candidates || [])[0] || {}).content || {}).parts || [];
  const a = p.find(x => x.inlineData && /audio/.test(x.inlineData.mimeType || ''));
  return a ? { data: a.inlineData.data, mime: a.inlineData.mimeType } : null;
}

// Microphone + speaker for the turn-by-turn interviewer. Records 16 kHz mono WAV, detects the end of an answer
// (speech followed by a pause), and plays the interviewer's voice. Half-duplex: never records while speaking.
async function audio(opts) {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  if (ctx.state === 'suspended') await ctx.resume();
  let stream;
  try { stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 } }); }
  catch (e) { ctx.close(); const err = new Error('mic'); err.code = 'mic'; throw err; }
  const url = URL.createObjectURL(new Blob([WORKLET], { type: 'application/javascript' }));
  await ctx.audioWorklet.addModule(url);
  const src = ctx.createMediaStreamSource(stream);
  const node = new AudioWorkletNode(ctx, 'ie-mic', { processorOptions: { t: IN_RATE } });
  src.connect(node);
  node.port.postMessage({ muted: true });
  let rec = null, cur = null;

  const wav = chunks => {
    const n = chunks.reduce((a, c) => a + c.length, 0), buf = new ArrayBuffer(44 + n * 2), v = new DataView(buf);
    const w = (o, s) => { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); };
    w(0, 'RIFF'); v.setUint32(4, 36 + n * 2, true); w(8, 'WAVE'); w(12, 'fmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
    v.setUint32(24, IN_RATE, true); v.setUint32(28, IN_RATE * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true); w(36, 'data'); v.setUint32(40, n * 2, true);
    let o = 44; for (const c of chunks) for (let i = 0; i < c.length; i++, o += 2) v.setInt16(o, c[i], true);
    return b64(new Uint8Array(buf));
  };

  return {
    /** Starts recording. Resolves with { audio: base64 WAV, secs } when stop() is called or, with auto, after a pause. */
    listen({ auto = true, pauseMs = 2200, onLevel, onSpeech } = {}) {
      if (rec) rec.finish();
      return new Promise(resolve => {
        const chunks = []; let spoke = 0, lastVoice = 0, noise = 300, t0 = Date.now(), done = false;
        const finish = () => {
          if (done) return; done = true; node.port.postMessage({ muted: true }); node.port.onmessage = null; rec = null;
          const total = chunks.reduce((a, c) => a + c.length, 0);
          resolve({ audio: spoke > 3 ? wav(chunks) : null, secs: total / IN_RATE });
        };
        rec = { finish };
        node.port.onmessage = e => {
          const c = e.data; chunks.push(c);
          let sum = 0; for (let i = 0; i < c.length; i += 4) sum += c[i] * c[i];
          const rms = Math.sqrt(sum / (c.length / 4)), now = Date.now();
          if (now - t0 < 600) noise = Math.max(noise, rms * 1.2);          // learn the room's background level
          const voice = rms > Math.max(900, noise * 2.2);
          if (voice) { spoke++; lastVoice = now; if (spoke === 4 && onSpeech) onSpeech(); }
          onLevel && onLevel(Math.min(1, rms / 6000));
          if (auto && spoke > 6 && now - lastVoice > pauseMs) finish();
          if (now - t0 > 300000) finish();                                  // 5-minute cap per answer
        };
        node.port.postMessage({ muted: false });
      });
    },
    stopListening() { if (rec) rec.finish(); },
    /** Plays base64 audio (WAV, or raw 16-bit PCM at 24 kHz). Resolves when finished. */
    async play(a) {
      if (cur) { try { cur.stop(0); } catch (e) {} }
      const bytes = Uint8Array.from(atob(a.data), c => c.charCodeAt(0));
      let ab;
      if (/wav/i.test(a.mime) || (bytes[0] === 82 && bytes[1] === 73)) ab = await ctx.decodeAudioData(bytes.buffer.slice(0));
      else { const rate = +((a.mime.match(/rate=(\d+)/) || [])[1] || OUT_RATE), pcm = new Int16Array(bytes.buffer, 0, bytes.length >> 1); ab = ctx.createBuffer(1, pcm.length, rate); const ch = ab.getChannelData(0); for (let i = 0; i < pcm.length; i++) ch[i] = pcm[i] / 32768; }
      return new Promise(res => { const s = ctx.createBufferSource(); s.buffer = ab; s.connect(ctx.destination); s.onended = () => { if (cur === s) cur = null; res(); }; cur = s; s.start(); });
    },
    stopPlaying() { if (cur) { try { cur.stop(0); } catch (e) {} cur = null; } },
    async close() { if (rec) rec.finish(); this.stopPlaying(); try { node.disconnect(); src.disconnect(); } catch (e) {} stream.getTracks().forEach(t => t.stop()); try { await ctx.close(); } catch (e) {} }
  };
}

window.GeminiLive = { start, write, turn, speech, audio };
