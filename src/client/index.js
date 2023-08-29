import { createApp } from "vue";
import App from "../App.vue";
import { Pinia, createPinia } from "pinia";
import { createWebHistory } from "vue-router";
import createRouter from "../router";
const app = createApp(App);
const router = createRouter(createWebHistory());
app.use(router);
//安装pinia
const pinia = createPinia();
app.use(pinia);
router.isReady().then(() => {
  app.mount("#root");
});
