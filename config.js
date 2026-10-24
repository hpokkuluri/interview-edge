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
window.PAYWALL = { free: 5, price: '$0.99', product: 'full_access' };
