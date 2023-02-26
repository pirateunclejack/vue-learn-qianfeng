<template>
  <div>
    <ul>
      <li v-for="data in datalist" :key="data.filmId">
      {{ data.name }}</li>

    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    // console.log('mounted')
    // fetch('/maizuo.json')
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res.data.filmes)
    //     this.datalist = res.data.films
    //   })
    axios.get('/maizuo.json').then(res => {
      this.datalist = res.data.data.films
    })
  }
}
</script>
<style lang="scss" scoped>
  $width: 300px;
  ul{
    li{
      background-color: red;
      width: $width;
    }
  }
</style>
