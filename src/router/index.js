import Vue from 'vue'
import Router from 'vue-router'
// 明确安装路由功能
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/activity',
      name: 'activity',
      component: () => import('@/pages/activity/info')
    },
    {
      path: '/',
      name: 'login',
      component: () => import('@/pages/login/login')
    }
  ]
})
/*
 * to :Route即将要进入的目标路由对象
 * from:Route 当前导航正要离开的路由对象
 * next:function调用该方法来resolve这个钩子，执行效果依赖next方法的调用参数
 *      next():进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是confirmed
 *      next(false):中断当前的导航。如果浏览器的url改变了(可能是用户手动或者浏览器后退按钮)，那么浏览器地址会重置到from路由对应的地址
 */
router.beforeEach((to,from,next)=>{

})
export default router
