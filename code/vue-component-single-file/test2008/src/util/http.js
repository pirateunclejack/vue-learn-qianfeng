// 1.encapsulation axios

import axios from 'axios'
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

export default http
