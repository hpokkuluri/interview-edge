// Interview Edge runtime configuration.
// Paid AI interviewer: set EDGE.api to the deployed Cloudflare Worker URL (see worker/README.md).
// While it is empty, the app hides the minutes option and works exactly as before.
window.EDGE = {
  api: '',
  freeMinutes: 10,
  packs: [
    { id: 'p10', minutes: 10, price: '$0.99' },
    { id: 'p30', minutes: 30, price: '$2.99' },
    { id: 'p60', minutes: 60, price: '$5.99' }
  ]
};

// Free preview + one-time unlock (used in the Android app; on the web only after opening with ?paywall=1).
// product must match the in-app product ID created in Google Play Console (one-time, non-consumable).
// There is no free unlock: question 6 onward stays locked until a real Google Play purchase.
// testPass: true shows a "Test version — tap to continue" button on the lock so testers can keep going. Set false for launch.
// web: true shows the same lock on the website (not just the Android app).
window.PAYWALL = { free: 5, price: '$0.99', product: 'full_access', testPass: true, web: true };

// On-device AI interviewer (Android app): Google's Gemma 4 (E2B) runs on the phone — no server, no API key, works offline.
// The model downloads once after install (about 2.6 GB). Phones below minRamMb get the voice mock interview instead.
// freeQuestions: questions per interview before the $0.99 unlock is needed (testPass in PAYWALL still lets testers continue).
window.LOCAL_AI = {
  name: 'gemma-4-E2B-it.litertlm',
  url: 'https://huggingface.co/litert-community/gemma-4-E2B-it-litert-lm/resolve/main/gemma-4-E2B-it.litertlm',
  bytes: 2588147712,
  minRamMb: 3500,      // 4 GB phones report about 3.6 GB. The crash test ran it fine on a 3 GB emulator (about 1.3 GB used).
  minAvailMb: 1200,    // free memory needed at the moment the model loads
  freeQuestions: 2,
  // Natural, human-sounding voice (Kokoro, Apache-2.0), downloaded together with the AI. Name must match EdgeAIPlugin.VOICE_PACK.
  voice: { name: 'kokoro-en-v1.zip', url: 'https://github.com/hpokkuluri/interview-edge/releases/download/voice-pack/kokoro-en-v1.zip', bytes: 125497886 }
};

// Live AI interviewer: Google Gemini (Live API) through Firebase AI Logic. Needs internet; listens to the real
// audio (handles accents well), answers in about a second in a natural voice. Works in the Android app and the website.
// firebase: paste the web app config from Firebase console → Project settings → Your apps. Until it's set, this is hidden.
// appCheck: beta uses a registered debug token (Firebase console → App Check → Apps → Manage debug tokens).
//   Before a public launch switch to { siteKey: '<reCAPTCHA Enterprise key>' } (see claude/friday-plan.md).
// freeMinutes: interview minutes before the $0.99 unlock is needed (PAYWALL.testPass still lets testers continue).
window.GEMINI = {
  firebase: {
    apiKey: 'AIzaSyBSIC4cFkCM-VO8dSOjSt0Bg7fjsijHe8k',
    authDomain: 'interview-edge-fe2b9.firebaseapp.com',
    projectId: 'interview-edge-fe2b9',
    storageBucket: 'interview-edge-fe2b9.firebasestorage.app',
    messagingSenderId: '828075476596',
    appId: '1:828075476596:web:0e3c5b7520a8b5e770b321'
  },
  appCheck: { debugToken: '80e95536-e2c3-4996-9440-04cee805e782' },
  model: 'gemini-3.1-flash-live-preview',
  live: false,                       // true = Live API real-time socket (blocked on Google's side for now: 'genai config not found')
  turnModel: 'gemini-3.5-flash-lite', // hears the candidate's audio and replies (~2 s)
  textModel: 'gemini-3.5-flash',      // writes the feedback report
  ttsModel: 'gemini-2.5-flash-preview-tts',   // interviewer's natural voice — the one with the bigger free allowance
  ttsModel2: 'gemini-3.8-flash-tts',          // second voice model (its own free allowance)
  voices: { female: 'Aoede', male: 'Charon' },
  freeMinutes: 3,
  maxMinutes: 30     // longest single interview (Gemini free-tier friendly)
};
