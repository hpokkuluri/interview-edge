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
  minRamMb: 5000,      // 6 GB phones report about 5.4 GB
  minAvailMb: 1200,    // free memory needed at the moment the model loads
  freeQuestions: 2
};
