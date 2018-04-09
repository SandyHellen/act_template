import Vue from "vue"
import Router from "vue-router"
// 明确安装路由功能
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/activity",
      name: "activity",
      component: () => import("@/pages/activity/info")
    },{
      path:"/",
      name:"login",
      component:() => import("@/pages/login/login")
    }
  ]
});
