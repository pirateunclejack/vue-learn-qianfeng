<template>
  <div>
    <ul>
      <li v-for="data in datalist" :key="data.filmId" @click="handleChangePage(data.filmId)">
        <img :src="data.poster" alt="">
        <div>
          <div class="title">{{ data.name }}</div>
          <div class="content">
            <div :class="data.grade?'':'hidden'">Score: <span style="color:red">{{ data.grade }}</span></div>
            <div class="actors">Actors: {{ data.actors | actorsFilter }}</div>
            <div>{{ data.nation }} | {{ data.runtime }} minutes</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
// import axios from 'axios'
import Vue from 'vue'
import http from '@/util/http'
Vue.filter('actorsFilter', (data) => {
  if (data === undefined) return 'No actors'
  return data.map(item => item.name).join()
})
export default {
  data () {
    return {
      datalist: []
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
  ul {
    li {
      padding: 1rem;
      overflow: hidden;
      img {
        width: 4.125rem;
        float: left;
      }
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
  .hidden {
    visibility: hidden;
  }
</style>
