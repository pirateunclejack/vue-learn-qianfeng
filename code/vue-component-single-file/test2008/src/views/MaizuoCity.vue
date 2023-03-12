<template>
  <div>
    <van-index-bar :index-list="computedList" @change="handleChange">
      <div v-for="data in cityList" :key="data.start" >
        <van-index-anchor :index="data.start"/>
          <van-cell v-for="item in data.list" :key="item.cityId" :title="item.name" @click="handleCity(item)"/>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import http from '@/util/http'
import Vue from 'vue'
import { Toast } from 'vant'

Vue.use(Toast)
export default {
  data () {
    return {
      cityList: []
    }
  },
  computed: {
    computedList () {
      // console.log(this.cityList.map(item => item.start))
      return this.cityList.map(item => item.start)
    }
  },
  mounted () {
    http({
      url: '/gateway?k=5066709',
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      // console.log(res.data.data.cities)
      this.cityList = this.renderCity(res.data.data.cities)
    })
  },
  methods: {
    handleCity (item) {
      // traditional
      // 1. location.href
      // 2. cookie, localstorage
      // location.href = '/cinemas?cityId=' + item.cityId

      // fashion
      // 1. middleman
      // 2. event bus

      // vuex - status management
      // console.log(item.name, item.cityId)
      // this.$store.state.cityId = item.cityId
      // this.$store.state.cityName = item.name
      this.$store.commit('changeCity', item)
      this.$store.dispatch('getCinemaData', item.cityId)

      this.$router.back()
    },
    handleChange (data) {
      Toast({
        position: 'bottom',
        message: data
      })
    },
    renderCity (list) {
      const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
      const cityList = []

      alphabet.forEach(letter => {
        const newList = list.filter(item => item.pinyin.substring(0, 1) === letter)
        if (newList.length === 0) {
          return
        }
        cityList.push({
          start: letter.toUpperCase(),
          list: newList
        })
        // console.log(this.cityList)
      })
      return cityList
      // console.log(this.cityList)
      // console.log(newList)
    }
  }
}
</script>
