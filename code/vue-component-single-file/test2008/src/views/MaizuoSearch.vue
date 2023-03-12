<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="Placeholder"
        @search="onSearch"
        @cancel="onCancel"
      />

    </form>
    <ul v-if="value">
        <li v-for="data in computedList" :key="data.cinemaId">
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
</template>
<script>
import Vue from 'vue'
import { Search } from 'vant'

Vue.use(Search)

export default {
  data () {
    return {
      value: ''
    }
  },
  computed: {
    computedList () {
      return this.$store.state.cinemaList.filter(item => item.name
        .toUpperCase().includes(this.value.toUpperCase()) || item.address
        .toUpperCase().includes(this.value.toUpperCase())
      )
    }
  },
  mounted () {
    console.log(this.$store.state.cinemaList)

    if (this.$store.state.cinemaList.length === 0) {
      this.$store.dispatch('getCinemaData', this.$store.state.cityId)
    } else {
      console.log('cache')
    }
  },
  methods: {
    onSearch () {
    },
    onCancel () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
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
