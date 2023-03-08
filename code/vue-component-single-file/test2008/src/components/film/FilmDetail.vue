<template>
  <div v-if="filmInfo" class="film">
    <div class="film-header"><div class="goBack">
      <img src="data:image/png;base64,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" alt="">
    </div>
    <div class="title">
      {{ filmInfo.name }}
    </div>
    <!----></div>
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
Vue.filter('timeFilter', (time) => {
  const date = new Date(time * 1000)
  return moment(date).format('YYYY-MM-DD')
})
export default {
  components: {
    filmActors,
    filmPhotos
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
    .film-header {
    user-select: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    box-sizing: border-box;
    position: fixed;
    background-color: hsla(0,0%,100%,0);
    color: transparent;
    transition: all .3s ease;
    width: 100vw;
    height: 4.25rem;
    z-index: 1;
    .goBack{
    user-select: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    color: transparent;
    box-sizing: border-box;
    height: 1.875rem;
    position: absolute;
    top: .3125rem;
    left: .3125rem;
    img {
    user-select: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    color: transparent;
    width: 1.875rem;
    }
    .title {
    user-select: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    color: transparent;
    box-sizing: border-box;
    font-size: 1.0625rem;
    line-height: 2.75rem;
    width: 100vw;
    text-align: center;
    }
    }
    }
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
