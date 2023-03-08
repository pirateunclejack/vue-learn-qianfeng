<template>
  <div>
    <tabbar></tabbar>
    <section><router-view></router-view></section>
  </div>
</template>

<script>
import tabbar from '@/components/MaizuoTabbar.vue'

export default {
  components: {
    tabbar
  },
  data () {
    return {
      datalist: [
        'films',
        'center',
        'cinemas'
      ]
    }
  }

}
</script>

<style lang="scss" scoped>
* {
  padding: 0%;
  margin: 0%;
}
html,body {
  height: 100%;
}
ul {
  list-style: none;
}
section {
  padding-bottom: 3rem;
}
</style>
