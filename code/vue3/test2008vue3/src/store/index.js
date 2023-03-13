import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import http from '@/util/http'

export default createStore({
  plugins: [createPersistedState({
    reducer: (state) => {
      return {
        cityId: state.cityId,
        cityName: state.cityName
      }
    }
  })],

  // public status
  state: {
    cityId: '310100',
    cityName: '上海',
    cinemaList: [],
    showTabbar: true
  },
  getters: {
  },
  // don't support asynchonous
  mutations: {
    changeCity (state, data) {
      state.cityName = data.name
      state.cityId = data.cityId
      // console.log(cityName)
    },
    changeCinemaData (state, cinemas) {
      state.cinemaList = cinemas
    },
    showTabbar (state, data) {
      state.showTabbar = data
    }

  },
  // support asynchonous
  actions: {
    getCinemaData (store, cityId) {
      // console.log('getCinemaData')
      return http({
        url: `https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&k=7963848`,
        headers: 'X-Host: mall.film-ticket.cinema.list'
      }).then(res => {
        // console.log(res.data.data)
        // this.cinemaList = res.data.data.cinemas
        store.commit('changeCinemaData', res.data.data.cinemas)
        // this.$nextTick(() => {
        // const bs = new BScroll('.box', {
        // scrollBar: {
        // fade: false
        // }
        // })
        // console.log(bs)
        // })
      })
    }
  },
  modules: {
  }
})
