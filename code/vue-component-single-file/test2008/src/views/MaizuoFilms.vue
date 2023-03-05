<template>
  <div>
    <film-swiper :key="datalist.length">
      <film-swiper-item v-for="data in datalist" :key="data.id" class="filmswiperitem">
        <img :src="data.imgUrl" alt="">
      </film-swiper-item>
    </film-swiper>
    films
    <router-view></router-view>
  </div>
</template>

<script>
import filmSwiper from '@/components/film/FilmSwiper.vue'
import filmSwiperItem from '@/components/film/FilmSwiperItem.vue'
import axios from 'axios'
export default {
  components: {
    filmSwiper,
    filmSwiperItem
  },
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios.get('/banner.json').then(res => {
      console.log(res.data)
      this.datalist = res.data.banner
    })
  }
}
</script>

<style lang="scss">
  .filmswiperitem{
    img {
      width: 100%;
    }
  }
</style>
