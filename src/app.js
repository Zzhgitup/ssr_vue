import { createSSRApp } from "vue";
import App from "./App.vue";
//这里采用函数返回app实例，目的是，防止跨请求污染，每一个请求都会返回一个新的实例
export default function createApp() {
  return createSSRApp(App);
}
