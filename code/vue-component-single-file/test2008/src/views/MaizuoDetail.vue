<template>
  <div>
    detail
  </div>
</template>
<script>
import axios from 'axios'
export default {
  created () {
    console.log('created', this.$route.params.id)
    // axios
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=7161260`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1670094337119816702656513","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      console.log(res.data.data)
    })
  }
}
</script>
