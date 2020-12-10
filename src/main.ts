import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Nav from "./components/Nav.vue";

// vue3 的全局引入组件
createApp(App)
  .use(store)
  .use(router)
  .component("Nav", Nav)
  .mount("#app");
