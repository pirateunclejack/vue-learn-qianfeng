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
    <NavBar></NavBar>
  </div>
</template>

<script>
import navbar from './components/NavBar.vue'
// import Vue from 'vue'
// Vue.component('NavBar', navbar)
export default {
  data () {
    return {
      myname: 'kerwin',
      mytext: '12321',
      datalist: []
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
    }
  },
  component: {
    navbar
  }
}
</script>

<style lang="scss">
  $width: 300px;
  ul{
    li{
      background-color: yellow;
      width: $width;
    }
  }
</style>
