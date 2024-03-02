import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("./components/Home.vue") },
  { path: "/tasks", component: () => import("./components/Tasks.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
