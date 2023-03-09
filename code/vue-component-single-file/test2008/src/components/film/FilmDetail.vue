<template>
  <div v-if="filmInfo" class="film">
    <detail-header v-scroll="50">
      {{ filmInfo.name }}
    </detail-header>
    <div data-v-21c202bd="" class="lazy-img film-poster" alt="filmPoster" style="width: 100%; background: rgb(249, 249, 249);">
      <div data-v-21c202bd="" class="padding" style="width: 100%; background: rgb(249, 249, 249);">
        <img data-v-21c202bd="" src="https://assets.maizuo.com/h5/v5/public/app/img/maizuo_padding.7c6a7f11.png" width="6.25rem" alt="img">
      </div>
      <div data-v-21c202bd="" class="lazy-img-wrap" style="width: 100%; background: rgb(249, 249, 249); opacity: 1; display: block;">
        <img data-v-21c202bd="" :src="filmInfo.poster" class="target-img">
      </div>
    </div>
    <div class="film-detail">
      <div class="col">
        <div class="film-name">
          <span class="name">{{ filmInfo.name }}</span>
          <span class="item">{{ filmInfo.filmType.name }}</span>
        </div>
        <div class="film-grade">
          <span class="grade">
          </span><!---->
        </div>
        </div>
        <div class="film-category grey-text">{{ filmInfo.category }}</div>
        <div class="film-premiere-time grey-text"> Premiere At: {{ filmInfo.premiereAt | timeFilter }}</div>
        <div class="film-nation-runtime grey-text"> {{ filmInfo.nation }} | {{ filmInfo.runtime }} minutes</div>
        <div class="test grey-text"></div>
        <div class="film-synopsis grey-text" :class="isHidden?'hidden':''" >{{ filmInfo.synopsis }}</div>
        <div class="toggle" @click="isHidden=!isHidden">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAAAXNSR0IArs4c6QAAAQlJREFUKBWNkT1Lw1AUht8TIlJExKlj/4WQFNIacWyHCoLQ1cXdj59g7e7i6CA4OAhOpbdNIKn2X3Ts1NGhocdzbgmk1NJmuCHnvM+Tc+8lEyVfDBzDxdVZtTrBDk8/SSrI8EbAzBH4EAwPc/qJ4/RkG28zklVGWefoYL8BQg/gcsYYmmjU2iQx8feFZjSrjLIyBTBgdjlKn8V4TUQszfsw8LtFkYnTW/lrh5lJoBeq+TenRJkV5EEzHN2B+LEY0t6KnOkhrHtPObMi0KKOCV68iqS03JoacC6T/QLUDmveRw7re02gRT2o+QKfdq9aAE33HDSDwB/bz8Lyr0D7y6uid5t1+XLTFf8Bk+NpPwQfd0oAAAAASUVORK5CYII=" alt="" :class="isHidden?'':'upper'">
        </div>
    </div>

    <film-actors :actors="filmInfo.actors"></film-actors>
    <film-photos :photos="filmInfo.photos"></film-photos>
  </div>

</template>

<script>
import Vue from 'vue'
import moment from 'moment'
import filmActors from '@/components/detail/FilmActors.vue'
import filmPhotos from '@/components/detail/FilmPhotos.vue'
import detailHeader from '@/components/detail/DetailHeader.vue'
Vue.filter('timeFilter', (time) => {
  const date = new Date(time * 1000)
  return moment(date).format('YYYY-MM-DD')
})
Vue.directive('scroll', {
  inserted (el, binding) {
    // console.log(el)
    console.log(binding.value)
    el.style.display = 'none'
    window.onscroll = () => {
      if ((document.documentElement.scrollTop || document.body.scrollTop) > binding.value) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  },
  unbind () {
    window.scroll = null
  }
})
export default {
  components: {
    filmActors,
    filmPhotos,
    detailHeader
  },
  props: {
    filmInfo: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      isHidden: true
    }
  }
}
</script>

<style lang="scss" scoped>
  div {
  .film {
    color: #2c3e50;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    box-sizing: border-box;
    .lazy-img{
      color: #2c3e50;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      box-sizing: border-box;
      position: relative;
      width: 100%;
      background: rgb(249, 249, 249);
      .padding {
        color: #2c3e50;
        user-select: none;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        box-sizing: border-box;
        height: 56vw;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        width: 100%;
        background: rgb(249, 249, 249);
        img {
          color: #2c3e50;
          user-select: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          width: 4rem;
        }
      }
      .lazy-img-wrap {
        color: #2c3e50;
        user-select: none;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        box-sizing: border-box;
        height: 56vw;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        position: absolute;
        overflow: hidden;
        top: 0;
        width: 100%;
        background: rgb(249, 249, 249);
        opacity: 1;
        display: block;
        img {
          color: #2c3e50;
          user-select: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          left: 0;
          width: 100%;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
    .film-detail{
      color: #2c3e50;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      box-sizing: border-box;
      padding: .9375rem;
      padding-top: .75rem;
      background-color: #fff;
      .col {
        color: #2c3e50;
        user-select: none;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        box-sizing: border-box;
        display: flex;
        -webkit-box-pack: start;
        justify-content: flex-start;
        -webkit-box-align: center;
        align-items: center;
        .film-name {
      color: #2c3e50;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      box-sizing: border-box;
      width: 16rem;
          .name {
      user-select: none;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      vertical-align: middle;
      color: #191a1b;
      font-size: 1.125rem;
      height: 1.5rem;
      line-height: 1.5rem;
      margin-right: .4375rem;
          }
          .item{
      user-select: none;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      vertical-align: middle;
      font-size: .5625rem;
      color: #fff;
      background-color: #d2d6dc;
      height: .875rem;
      line-height: .875rem;
      padding: 0 .125rem;
      border-radius: .125rem;
      display: inline-block;
          }
        }
      }
      .film-category {
      user-select: none;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      box-sizing: border-box;
      font-size: .8125rem;
      color: #797d82;
      margin-top: .25rem;
      }
      .film-premiere-time{
      user-select: none;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      box-sizing: border-box;
      font-size: .8125rem;
      color: #797d82;
      margin-top: .25rem;
      }
      .film-nation-runtime {
      user-select: none;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      box-sizing: border-box;
      font-size: .8125rem;
      color: #797d82;
      margin-top: .25rem;
      }
      .film-synopsis {
        user-select: none;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        box-sizing: border-box;
        font-size: .8125rem;
        color: #797d82;
        margin-top: .75rem;
        transition: height .5s ease;
      }

      .toggle {
        color: #2c3e50;
        user-select: none;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        box-sizing: border-box;
        text-align: center;
        display: block;
        height: auto;
        width: 1.25rem;
        margin: auto;
        line-height: normal;
        img {
          color: #2c3e50;
          user-select: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          text-align: center;
          line-height: normal;
          width: .5rem;
          margin: auto;
        }
        .upper {
          -webkit-transform: rotate(180deg);
          -ms-transform: rotate(180deg);
          transform: rotate(180deg);
        }
      }
      .hidden {
        overflow: hidden;
        height: 2.375rem!important;
      }

    }
}

  }
</style>
