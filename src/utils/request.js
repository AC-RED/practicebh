import axios from 'axios'

axios.interceptors.request.use(function (config) {
  axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

  let token = window.localStorage.getItem('user-token')

  config.headers.Authorization = `Bearer ${token}`

  return config
}, function () {})

axios.interceptors.response.use(function (response) {
  return response.data ? response.data : {}
}, function () {})

export default axios
