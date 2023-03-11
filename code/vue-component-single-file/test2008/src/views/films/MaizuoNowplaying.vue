<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="Finished"
      :immediate-check="false"
      @load="onLoad"
    >
      <van-cell v-for="data in datalist" :key="data.filmId" @click="handleChangePage(data.filmId)">
        <img :src="data.poster" alt="">
        <div class="container">
          <div class="title">{{ data.name }}</div>
          <div class="content">
            <div :class="data.grade?'':'hidden'">Score: <span style="color:red">{{ data.grade }}</span></div>
            <div class="actors">Actors: {{ data.actors | actorsFilter }}</div>
            <div>{{ data.nation }} | {{ data.runtime }} minutes</div>
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
// import axios from 'axios'
import Vue from 'vue'
import http from '@/util/http'

import { List } from 'vant'

Vue.use(List)

// with options
Vue.filter('actorsFilter', (data) => {
  if (data === undefined) return 'No actors'
  return data.map(item => item.name).join()
})
export default {
  data () {
    return {
      datalist: [],
      loading: false,
      finished: false,
      current: 1
    }
  },
  mounted () {
    // axios.get('https://www.mei.com/api/pc/get_banner').then(res => {
    // console.log(res.data)
    // })
    http(
      {
        url: '/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6116752',
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }
    ).then(res => {
      console.log(res.data.data.films)
      this.datalist = res.data.data.films
    })
  },
  methods: {
    onLoad () {
      console.log('end')
      this.current++
      http(
        {
          url: `/gateway?cityId=110100&pageNum=${this.current}&pageSize=10&type=1&k=6116752`,
          headers: {
            'X-Host': 'mall.film-ticket.film.list'
          }
        }
      ).then(res => {
        console.log(res.data.data.films)
        console.log(res.data.data)
        this.datalist = [...this.datalist, ...res.data.data.films]
        this.loading = false
        if (this.datalist.length === res.data.data.total !== 0) {
          this.finished = true
        }
      })
    },
    handleChangePage (id) {
      console.log(id)
      // programmatic route
      // location.href = '#/detail'
      // this.$router.push(`/detail/${id}`)
      this.$router.push({
        name: 'kerwinDetail',
        params: {
          id
        }
      })
    }
  }

}
</script>

<style lang="scss" scoped>
  .van-list {
    padding: 0%;
    .van-cell {
      padding: 1rem;
      overflow: hidden;
      img {
        width: 4.125rem;
        float: left;
      }
      .container{
        padding-left: 5rem;
        padding-right: .625rem;
        line-height: 1.5rem;
        .title {
        font-size: 1rem;
        }
        .content{
          font-size: .75rem;
          color: gray;
          .actors {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }

    }
  }
  .hidden {
    visibility: hidden;
  }
</style>
