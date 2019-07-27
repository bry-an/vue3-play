import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import NewsItemView from "./views/NewsItemView"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "item/:id",
      name: "news-item",
      component: NewsItemView
    },
    {
      path: "/:type",
      name: "home",
      component: Home
    },
  ]
});
