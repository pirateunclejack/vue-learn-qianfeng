// 1.encapsulation axios

import axios from 'axios'
import Vue from 'vue'
import { Toast } from 'vant'

Vue.use(Toast)
// function httpForList () {
//   return axios(
//     {
//       url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6116752',
//       headers: {
//         'X-client-info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1670094337119816702656513","bc":"110100"}',
//         'X-Host': 'mall.film-ticket.film.list'
//       }
//     }
//   )
// }
// function httpForDetail (params) {
//   return axios({
//     url: `https://m.maizuo.com/gateway?filmId=${params}&k=7161260`,
//     headers: {
//       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1670094337119816702656513","bc":"110100"}',
//       'X-Host': 'mall.film-ticket.film.info'
//     }
//   })
// }

// export default { httpForDetail, httpForList }

const http = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 10000,
  headers: {
    'X-client-info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1670094337119816702656513","bc":"110100"}'
  }
})

// intercept before request - showloading

// intercept after request - hideloading

// Add a request interceptor
http.interceptors.request.use(function (config) {
  // Do something before request is sent
  Toast.loading({
    message: 'Loading...',
    forbidClick: true
  })
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
http.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  Toast.clear()
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export default http
