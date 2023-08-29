const express = require("express");
import { createPinia } from "pinia";
const path = require("path");
const app = express();
import { createMemoryHistory } from "vue-router";
import createApp from "../app";
import { renderToString } from "@vue/server-renderer";
import createRouter from "../router/index";
app.use(express.static(path.resolve(process.cwd(), "build")));
app.get("/*", async (req, res) => {
  let app = createApp();
  const router = createRouter(createMemoryHistory());
  app.use(router);
  router.push(req.url || "/");
  await router.isReady();
  const pin = createPinia(); //创建pinia
  app.use(pin); //注册pinia
  const renderStr = await renderToString(app);
  res.send(`
  <!DOCTYPE html>
    <html lang="en">
    <head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
<div id="root">${renderStr}</div>
<script src="/client/client_bundle.js"></script>
</body>
</html>`);
});
app.listen(3000, () => {
  console.log("服务已经启动 at http://127.0.0.1:3000");
});
