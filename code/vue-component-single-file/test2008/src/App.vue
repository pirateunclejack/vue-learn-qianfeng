<template>
  <div>
    hello app 123456
    <br>
    {{ myname }}
    <br>
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
  </div>
</template>

<script>
import navbar from './components/NavBar.vue'
import sidebar from './components/SideBar.vue'
// import Vue from 'vue'
// Vue.component('NavBar', navbar)
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
      isShow: true
    }
  },
  computed: {

  },
  watch: {

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
