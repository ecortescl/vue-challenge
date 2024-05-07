import { createRouter, createWebHistory } from "vue-router";
import IndicationsView from "../views/IndicationsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: IndicationsView,
    },
    {
      path: "/consideraciones",
      name: "consideraciones",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ConsiderationsView.vue"),
    },
    {
      path: "/recursos",
      name: "recursos",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ResourcesView.vue"),
    },
  ],
});

export default router;
