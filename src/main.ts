import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Layout from "./components/Layout.vue";

// vue3 的全局引入组件
createApp(App)
  .use(store)
  .use(router)
  .component("Layout", Layout)
  .mount("#app");
