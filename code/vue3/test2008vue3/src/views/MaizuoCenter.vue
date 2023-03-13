<template>
  <div>
    center
    <van-button type="primary">Primary</van-button>
    <van-button type="info">Info</van-button>
    <van-button type="default">Default</van-button>
    <van-button type="danger">Danger</van-button>
    <van-button type="warning">Warning</van-button>
  </div>
</template>
<script>
import hideTabbar from '@/util/mixinObj.js'

export default {
  mixins: [hideTabbar],
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/login')
    }
  }
}
</script>
