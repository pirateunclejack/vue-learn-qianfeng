<template>
  <div>
    <van-index-bar :index-list="computedList">
      <div v-for="data in cityList" :key="data.start" >
        <van-index-anchor :index="data.start"/>
          <van-cell v-for="item in data.list" :key="item.cityId" :title="item.name" />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import http from '@/util/http'
export default {
  data () {
    return {
      cityList: []
    }
  },
  computed: {
    computedList () {
      console.log(this.cityList.map(item => item.start))
      return this.cityList.map(item => item.start)
      // return ['1', '2']
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
