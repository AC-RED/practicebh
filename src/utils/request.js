import axios from 'axios'

axios.interceptors.request.use(function (config) {
  axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

  let token = window.localStorage.getItem('user-token')

  config.headers.Authorization = `Bearer ${token}`

  return config
}, function () {})

export default axios
