import { createWebHistory, createRouter } from "vue-router";
import main from "../pages/MainPage.vue";

const routes = [
  {
    path: "/",
    name: "Main page",
    meta: { layout: "main", title: "Main page" },
    component: main,
  },
];

const router = createRouter({
  history: createWebHistory(),
  base: "/",
  routes,
});
window.router = router;
export default router;
