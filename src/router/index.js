import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Login from '../views/login'
import axios from '../utils/request'
import homeDirect from '../views/home/home'

import Login2 from '../views/login/index2'

Vue.use(VueRouter)

Vue.prototype.$axios = axios

// axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

const routes = [{
  path: '*',
  component: () => import('../views/404')
},
{
  path: '/login2',
  component: Login2
}, {
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
  }, {
    path: '/home/comment', // 评论管理
    component: () => import('../views/comments')
  }, {
    path: 'material', // 素材管理
    component: () => import('../views/material')
  }, {
    path: 'articles',
    component: () => import('../views/articales')
  }, {
    path: 'publish/:articleId',
    component: () => import('../views/publish')
  }, {
    path: 'publish', // 此规则匹配发布文章
    component: () => import('../views/publish')
  }, {
    path: 'account',
    component: () => import('../views/account')
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
