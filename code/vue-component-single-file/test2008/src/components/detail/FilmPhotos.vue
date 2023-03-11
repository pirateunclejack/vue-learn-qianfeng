<template>
  <div v-if="photos" class="photos">
    <div class="photos-title-bar">Photos</div>
    <photo-swiper class="row-scroll-items-nav">
        <photo-swiper-item v-for="(photo, index) in photos" :key="photo.index">
          <div class="photo-list"  @click="handlePreview(index)">
            <img :src="photo" alt="">
          </div>
        </photo-swiper-item>
    </photo-swiper>

  </div>
</template>

<script>
import Vue from 'vue'
import photoSwiper from '@/components/detail/PhotoSwiper.vue'
import photoSwiperItem from '@/components/detail/PhotoSwiperItem.vue'
import { ImagePreview } from 'vant'

Vue.use(ImagePreview)

export default {
  components: {
    photoSwiper,
    photoSwiperItem

  },
  props: {
    photos: {
      type: Array,
      default: null
    }
  },
  methods: {
    handlePreview (index) {
      ImagePreview(
        {
          images: this.photos,
          startPosition: index,
          closeable: true
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.photos{
  margin-top: .625rem;
  margin-bottom: 3.75rem;
  .photos-title-bar{
    height: 3.875rem;
    width: 100%;
    padding: .9375rem;
    font-size: 1rem;
  }
  .row-scroll-items-nav{
    padding-left: .9375rem;
    .photo-list{
    height: 6.25rem;
    width: 9.375rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 100%;
    }
  }

  }
}
</style>
