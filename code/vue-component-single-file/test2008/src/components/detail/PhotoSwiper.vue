<template>
  <div class="swiper-container swiper-photo">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import SwiperCore, { Navigation, Pagination } from 'swiper/core'
// SwiperCore.use([Navigation, Pagination])
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
// import 'swiper/css-bundle'
export default {
  mounted () {
    const swiper = new Swiper('.swiper-photo', {
      slidesPerView: '2.3',
      spaceBetween: 10,
      freeMode: true,
      cssMode: true
    })
    console.log(swiper)
  }
}
</script>
