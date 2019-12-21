import axios from 'axios'
import router from '../router'
import { Message } from 'element-ui'

axios.interceptors.request.use(function (config) {
  axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

  let token = window.localStorage.getItem('user-token')

  config.headers.Authorization = `Bearer ${token}`

  return config
}, function () { })

axios.interceptors.response.use(function (response) {
  return response.data ? response.data : {}
  //   解决找不到data时的报错问题
}, function (error) {
  let status = error.response.status
  //   let configurl = error.config.url// 用于设置不同请求地址下相同错误参数的提示
  let message = ''
  if (status === 400) {
    message = '手机号或验证码错误'
  } else if (status === 401) {
    router.push('/login')
  } else if (status === 403) {
    router.push('/login')
  } else if (status === 404) {
    message = '手机号不正确'
  } else if (status === 507) {
    message = '服务器数据库异常'
  }
  Message({ type: 'warning', message })
})

export default axios
