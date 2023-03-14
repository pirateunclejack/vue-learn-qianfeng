<template>
  <div class="swiper-container swiper-photo">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css';

export default {
  mounted () {
    new Swiper('.swiper-photo', {
      slidesPerView: '2.3',
      spaceBetween: 10,
      freeMode: true,
      cssMode: true
    })
  }
}
</script>
