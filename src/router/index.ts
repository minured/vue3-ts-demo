import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Money from "@/views/Money.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "money",
    redirect: "/money"
  },
  {
    path: "/money",
    name: "Money",
    component: Money,
  },
  {
    path: "/label",
    name: "Label",
    component: () => import("../views/Label.vue"),
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: () => import("../views/Statistics.vue"),
  },
  {
    path: '/.',
    name: "404",
    component: () => import("../views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
