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
