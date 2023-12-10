const originalFetch = window.fetch;
window.fetch = function (...args) {
  console.log("Fetch request:", args);
  return originalFetch.apply(this, args);
};
