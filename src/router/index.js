import Vue from "vue"
import Router from "vue-router"
const normal = () => import("@/pages/activity/normal")
// 明确安装路由功能
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "activity",
      component: normal
    }
  ]
});
