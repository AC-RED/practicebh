import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Login from '../views/login'
import axios from 'axios'
import homeDirect from '../views/home/home'

Vue.use(VueRouter)

Vue.prototype.$axios = axios

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    //  主页
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '',
      component: homeDirect
    }]
  }, {
    // 登录页
    path: '/login',
    component: Login
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
