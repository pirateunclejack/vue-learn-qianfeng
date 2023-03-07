<template>

  <div>
    <film-detail :film-info="filmInfo"></film-detail>
  </div>
</template>
<script>
import http from '@/util/http'
import filmDetail from '@/components/film/FilmDetail.vue'
export default {
  components: {
    filmDetail
  },
  data () {
    return {
      filmInfo: null
    }
  },
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
      this.filmInfo = res.data.data.film
    })
  }
}
</script>
