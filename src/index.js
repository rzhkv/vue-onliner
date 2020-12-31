(function () {
  const connectionHandler = (Vue) => {
    if (typeof window !== "undefined") {
      if (navigator.onLine) {
        Vue.prototype.$onliner = true;
      } else {
        Vue.prototype.$onliner = false;
      }
    }
  };

   // Initial setup
   connectionHandler();

  // Setup the listeners
  window.addEventListener("online", connectionHandler);
  window.addEventListener("offline", connectionHandler);

  export default connectionHandler;
})();
