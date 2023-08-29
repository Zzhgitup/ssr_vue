import { createRouter } from "vue-router";
const route = [
  {
    path: "/home",
    component: () => import("../view/Home/Home.vue"),
  },
  {
    path: "/pagea",
    component: () => import("../view/PageA/PageA.vue"),
  },
];
export default function (history) {
  return createRouter({
    history,
    routes: route,
  });
}
