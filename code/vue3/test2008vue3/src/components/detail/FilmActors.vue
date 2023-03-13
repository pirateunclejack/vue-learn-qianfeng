<template>
  <div v-if="actors" class="actors">
    <div class="actors-title-bar">Actors</div>
    <actor-swiper class="row-scroll-items-nav">
      <actor-swiper-item v-for="actor in actors" :key="actor.index">
        <div class="actors-item">
          <div class="actor-img">
              <img :src="actor.avatarAddress" alt="">
          </div>
          <div class="actors-name">{{actor.name}}</div>
          <div class="actors-role">{{actor.role}}</div>
        </div>
      </actor-swiper-item>
    </actor-swiper>

  </div>
</template>

<script>
import actorSwiper from '@/components/detail/ActorSwiper.vue'
import actorSwiperItem from '@/components/detail/ActorSwiperItem.vue'

export default {
  components: {
    actorSwiper,
    actorSwiperItem

  },
  props: {
    actors: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
  .actors {
    margin-top: .625rem;
    display: block;
    .actors-title-bar{
      width: 100%;
      padding: .9375rem;
      font-size: 1rem;
      text-align: left;
      display: inline-block;
      height: 1.4063rem;
      line-height: 1.375rem;
    }
    .row-scroll-items-nav{
      height: 8.75rem;
      padding-left: .9375rem;
      .actors-item {
        text-align: center;
        display: block;
        width: 5.3125rem;
        margin-right: .625rem;
        .actor-img {
          width: 100%;
          height: 5.3125rem;
          display: flex;
          overflow: hidden;
          align-items: center;
          justify-content: center;
          img{
            width: 100%;
          }
        }
        .actors-name{
          padding-top: 10px;
          font-size: .75rem;
          height: 1.125rem;
        }
        .actors-role {
          font-size: .625rem;
          color: #797d82;
        }
      }
    }
  }
</style>
