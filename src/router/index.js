import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const HomeIndex = () => import('@/pages/home/index')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/home/index',
      name:'homeIndex',
      component:HomeIndex
    }
  ]
})
