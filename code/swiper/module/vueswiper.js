Vue.component('swiperItem', {
  template: `
    <div class="swiper-slide">
      <slot></slot>
    </div>
  `,


})
Vue.component('swiper', {
  props: {
    loop: {
      type:Boolean,
      default: true
    }
  },
  template: `
    <div class="swiper kerwin">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <slot> </slot>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination"></div>

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- If we need scrollbar -->
      <div class="swiper-scrollbar"></div>
    </div>
  `,

  mounted() {
    console.log('mounted-swiper')
    // console.log('mounted')
    const swiper = new Swiper(".kerwin", {
      // direction: 'vertical',
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      loop: this.loop
    })
  },
  destroyed() {
    console.log('destroyed')
  },
})
