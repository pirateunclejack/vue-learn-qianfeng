<template>
  <div>
    <film-detail :film-info="filmInfo"></film-detail>
  </div>
</template>
<script>
import http from '@/util/http'
import filmDetail from '@/components/film/FilmDetail.vue'
import hideTabbar from '@/util/mixinObj'
import { useRoute } from 'vue-router'
import { reactive, onMounted, toRefs } from 'vue'

export default {
  setup(){
    const obj = reactive({
      filmInfo: null
    })
    const route = useRoute()
    onMounted(()=>{
      http({
        url: `/gateway?filmId=${route.params.id}&k=7161260`,
        headers: {
          'X-Host': 'mall.film-ticket.film.info'
        }
      }).then(res => {
        obj.filmInfo = res.data.data.film
      })
    })
    return{
      ...toRefs(obj)
    }
  },
  components: {
    filmDetail
  },
  mixins: [hideTabbar],
}
</script>
