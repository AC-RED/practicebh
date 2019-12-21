import leftNav from './home/left-nav'
import subHead from './home/subject-header'
import Crumbs from './common/crumbs'
// 所有自定义组件的插件
export default {
  install: function (Vue) {
    Vue.component('left-nav', leftNav) // 注册 左侧导航组件
    Vue.component('sub-header', subHead) // 注册头部组件
    Vue.component('crumbs', Crumbs)// 注册面包屑
  }
}
