/*
 路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'

Vue.use(VueRouter) //使用插件

// 向外默认暴露一个路由器对象
export default new VueRouter({ //TODO  配置对象 属性名是特定的
  routes: [
    {
      path: '/msite',  //值为路由组件
      component: Msite
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})

