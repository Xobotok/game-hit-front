import { createWebHistory, createRouter } from "vue-router";
import main from "../pages/MainPage.vue";
import GamePage from "../pages/GamePage.vue";
import PlayFrame from "../pages/PlayFrame.vue";
import NewsPage from "../pages/NewsPage.vue";
import NewPage from "../pages/NewPage.vue";

const routes = [
  {
    path: "/",
    name: "Main page",
    meta: { layout: "main", title: "Main page" },
    component: main,
  },
  {
    path: "/game/:id",
    name: "Game page",
    meta: { layout: "main", title: "Game page" },
    component: GamePage,
  },
  {
    path: "/play/:id",
    name: "Play game",
    meta: { layout: "main", title: "Play game" },
    component: PlayFrame,
  },
  {
    path: "/news/",
    name: "All news",
    meta: { layout: "main", title: "News" },
    component: NewsPage,
  },
  {
    path: "/news/:id",
    name: "News page",
    meta: { layout: "main", title: "News" },
    component: NewPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  base: "/",
  routes,
});
window.router = router;
export default router;
