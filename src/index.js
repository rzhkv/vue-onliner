export const vueCheckOnline = {
  data() {
    return {
      onliner: false,
    };
  },
  created() {
    if (typeof window !== "undefined") {
      navigator.onLine ? (this.onliner = true) : (this.onliner = false);

      const onlineHandler = () => {
        this.onliner = true;
      };

      const offlineHandler = () => {
        this.onliner = false;
      };

      window.addEventListener("online", onlineHandler);
      window.addEventListener("offline", offlineHandler);

      this.$once("hook:beforeDestroy", () => {
        window.removeEventListener("online", onlineHandler);
        window.removeEventListener("offline", offlineHandler);
      });
    }
  },
};

export const vueCheckNetwork = {
  install(Vue, options = { mixin: true, storage: true }) {
    const pluginOptions = {
      mixin: options.mixin,
    };
    if (pluginOptions.mixin) Vue.mixin(vueCheckOnline);
  },
};

export default vueCheckNetwork;
