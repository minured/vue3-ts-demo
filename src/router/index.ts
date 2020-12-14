import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Money from "@/views/Money.vue";
import Edit from "@/views/Edit"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "money",
    redirect: "/money",
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
    path: "/edit/:labelName",
    name: "edit",
    component: () => import("../views/Edit"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
