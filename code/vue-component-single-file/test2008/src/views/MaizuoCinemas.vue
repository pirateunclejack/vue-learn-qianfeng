<template>
  <div>
    <div class="navbar">
      <van-nav-bar ref="navbar" title="Cinemas" @click-left="handleLeft" @click-right="handleRight">
        <template #right>
          <van-icon name="search" size="24" color="black"/>
        </template>
        <template #left>
          {{ $store.state.cityName }}
          <van-icon name="arrow-down" size="24" color="black"/>
        </template>
      </van-nav-bar>
    </div>
    <div class="box" :style="{height:height}">
      <ul>
        <li v-for="data in $store.state.cinemaList" :key="data.cinemaId">
          <div class="left">
            <div class="cinema-name">{{ data.name }}</div>
            <div class="cinema-address">{{ data.address }}</div>
          </div>
          <div class="right">
            <div class="cinema-lowPrice">￥{{ data.lowPrice/100 }} start</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import http from '@/util/http'
import BScroll from '@better-scroll/core'
export default {
  data () {
    return {
      // cinemaList: [],
      height: '0px'
    }
  },
  mounted () {
    this.height = document.documentElement.clientHeight - this.$refs.navbar.$el.offsetHeight - document.querySelector('footer').offsetHeight + 'px'
    if (this.$store.state.cinemaList.length === 0) {
      this.$store.dispatch('getCinemaData', this.$store.state.cityId).then(res => {
        this.$nextTick(() => {
          const bs = new BScroll('.box', {
            scrollBar: {
              fade: false
            }
          })
          console.log(bs)
        })
      }

      )
    } else {
      this.$nextTick(() => {
        const bs = new BScroll('.box', {
          scrollBar: {
            fade: false
          }
        })
        console.log(bs)
      })
    }
    // http({
    //   url: `https://m.maizuo.com/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=7963848`,
    //   headers: 'X-Host: mall.film-ticket.cinema.list'
    // }).then(res => {
    //   // console.log(res.data.data.cinemas)
    //   this.cinemaList = res.data.data.cinemas
    //   this.$nextTick(() => {
    //     const bs = new BScroll('.box', {
    //       scrollBar: {
    //         fade: false
    //       }
    //     })
    //     console.log(bs)
    //   })
    // })
  },
  methods: {
    handleLeft () {
      // console.log('left')
      this.$router.push('/city')
    },
    handleRight () {
      this.$router.push('/cinemas/search')
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  overflow: hidden;
  position: relative;
}
  div{
    ul {
      padding: 0%;
      margin: 0%;
      li{
        padding: .9375rem;
        list-style: none;
        display: flex;
        justify-content: space-between;
        border-top: .0625rem solid gray;
        .left{
          width: calc(100% - 4.0625rem);
          text-align: left;
          float: left;
          padding-right: .9375rem;
          overflow: hidden;
            text-overflow: nowrap;
            white-space: nowrap;
          .cinema-name {
            font-size: .9375rem;
          }
          .cinema-address {
            color: #797d82;
            font-size: .75rem;
            margin-top: 5px;
            overflow: hidden;
            text-overflow: nowrap;
            white-space: nowrap;
          }
        }
        .right{
          width: 4.375rem;
          color: red;
          text-align: center;
          margin-right: -0.3125rem;
          float: right;
          .cinema-lowPrice{
            font-size: .75rem;
          }
        }
      }
    }
  }
</style>
