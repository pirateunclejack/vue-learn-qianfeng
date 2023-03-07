<template>
  <div>
    <film-swiper :key="datalist.length">
      <film-swiper-item v-for="data in datalist" :key="data.id" class="filmswiperitem">
        <img :src="data.imgUrl" alt="">
      </film-swiper-item>
    </film-swiper>
    <film-header class="sticky"></film-header>
    <router-view></router-view>
  </div>
</template>

<script>
import filmSwiper from '@/components/film/FilmSwiper.vue'
import filmSwiperItem from '@/components/film/FilmSwiperItem.vue'
import filmHeader from '@/components/film/FilmHeader.vue'
import axios from 'axios'
export default {
  components: {
    filmSwiper,
    filmSwiperItem,
    filmHeader
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

<style lang="scss" scoped>
  .filmswiperitem{
    img {
      // height: 23.4375rem;
      width: 100%;
    }
  }
  .sticky {
    position: sticky;
    top: 0px;
    background-color: white;
  }
</style>
