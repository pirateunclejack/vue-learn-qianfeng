<template>
  <div class="swiper-container swiper-actor">
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
    const swiper = new Swiper('.swiper-actor', {
      slidesPerView: '3.5',
      spaceBetween: 0,
      freeMode: true,
      cssMode: true
    })
    console.log(swiper)
  }
}
</script>
