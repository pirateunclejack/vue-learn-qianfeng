<template>
  <div>
    hello app 123456
    <br>
    {{ myname }}
    <br>
    <img src="/docker.png" alt="">
    <input v-model="mytext" type="text">
    <button @click="handleAdd">add</button>
    <ul>
      <li v-for="data in datalist" :key="data">
      {{ data }}
    </li>
    </ul>
    <navbar myname="home" :myright="false" @event="handleEvent">
      <div>slotttttttttttttttt</div>
    </navbar>
    <sidebar v-show="isShow"></sidebar>
    <div v-hello>hellooooooooooooooo</div>
    <img :src="imgUrl | imgFilter"/>
  </div>
</template>

<script>
// @ is equal to `realpath src`
import navbar from '@/components/NavBar.vue'
import sidebar from '@/components/SideBar.vue'
import axios from 'axios'
import Vue from 'vue'
// Vue.component('NavBar', navbar)
Vue.directive('hello', {
  inserted (el, binding) {
    console.log(el)
    el.style.border = '1px solid blue'
  }
})
Vue.filter('imgFilter', (path) => {
  return path
})
export default {
  components: {
    navbar,
    sidebar
  },
  data () {
    return {
      myname: 'kerwin',
      mytext: '12321',
      datalist: [],
      isShow: true,
      imgUrl: 'https://s1.hdslb.com/bfs/static/laputa-home/client/assets/load-error.685235d2.png'
    }
  },
  computed: {

  },
  watch: {

  },
  mounted () {
    axios.get('/kerwin/api/mmdb/movie/v3/list/hot.json?ct=北京&ci=1&channelId=4').then(res => {
      console.log(res.data)
    })
  },
  methods: {
    handleAdd () {
      console.log(this.mytext)
      this.datalist.push(this.mytext)
    },
    handleEvent () {
      this.isShow = !this.isShow
    }
  }

}
</script>

<style lang="scss" scoped>
  $width: 300px;
  ul{
    li{
      background-color: yellow;
      width: $width;
    }
  }
</style>
