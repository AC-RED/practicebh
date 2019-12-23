import axios from 'axios'
import router from '../router'
import { Message } from 'element-ui'
import JSONBig from 'json-bigint'

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

axios.interceptors.request.use(function (config) {
  // console.log(config)
  let token = window.localStorage.getItem('user-token')

  config.headers.Authorization = `Bearer ${token}`

  return config
}, function () { })

axios.defaults.transformResponse = [function (data) {
  // data 是响应回来的字符串

  return JSONBig.parse(data)
}]

axios.interceptors.response.use(function (response) {
  console.log(response)

  return response.data ? response.data : {}
  //   解决找不到data时的报错问题
}, function (error) {
  console.log(error)

  let status = error.response.status
  //   let configurl = error.config.url// 用于设置不同请求地址下相同错误参数的提示q
  let message = ''
  if (status === 400) {
    message = '手机号或验证码错误'
  } else if (status === 401) {
    window.localStorage.removeItem('user-token')
    router.push('/login')
  } else if (status === 403) {
    window.localStorage.removeItem('user-token')
    router.push('/login')
  } else if (status === 404) {
    message = '手机号不正确'
  } else if (status === 507) {
    message = '服务器数据库异常'
  }
  Message({ type: 'warning', message })
  return Promise.reject(error)
})

export default axios
