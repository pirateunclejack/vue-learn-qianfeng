<template>
  <div>
    detail
  </div>
</template>
<script>
import http from '@/util/http'
export default {
  created () {
    console.log('created', this.$route.params.id)
    // axios
    http({
      url: `/gateway?filmId=${this.$route.params.id}&k=7161260`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      console.log(res.data.data.film)
    })
  }
}
</script>
