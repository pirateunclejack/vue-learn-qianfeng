<template>
  <div class="swiper-container swiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// import SwiperCore, { Navigation, Pagination } from 'swiper/core'
// SwiperCore.use([Navigation, Pagination])
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    const swiper = new Swiper('.swiper', {
      pagination: {
        el: '.swiper-pagination'
      },
      loop: this.loop,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    })
    console.log(swiper)
  }
}
</script>
