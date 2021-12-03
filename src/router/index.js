import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import HomeWaitingForResult from "@/views/HomeWaitingForResult";
import HomeResultReady from "@/views/HomeResultReady";
import Result from "@/views/Result";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/waiting-for-result",
    name: "HomeWaitingForResult",
    component: HomeWaitingForResult,
  },
  {
    path: "/result-ready",
    name: "HomeResultReady",
    component: HomeResultReady,
  },
  {
    path: "/result",
    name: "Result",
    component: Result,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
