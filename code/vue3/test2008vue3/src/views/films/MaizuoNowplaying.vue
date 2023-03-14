<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="Finished"
      :immediate-check="false"
      @load="onLoad"
    >
      <van-cell v-for="data in datalist" :key="data.filmId" @click="handleChangePage(data.filmId)">
        <img :src="data.poster" alt="">
        <div class="container">
          <div class="title">{{ data.name }}</div>
          <div class="content">
            <div :class="data.grade?'':'hidden'">Score: <span style="color:red">{{ data.grade }}</span></div>
            <div class="actors">Actors: {{ actorsFilter(data.actors) }}</div>
            <div>{{ data.nation }} | {{ data.runtime }} minutes</div>
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import http from '@/util/http'
import {reactive, toRefs, onMounted} from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup(){
    const router = useRouter()
    const store = useStore()
    const obj = reactive({
      datalist: [],
      current: 0,
      loading: false,
      finished: false,
    })
    onMounted(()=>{
      http(
        {
          url: `/gateway?cityId=${store.state.cityId}&pageNum=1&pageSize=10&type=1&k=6116752`,
          headers: {
            'X-Host': 'mall.film-ticket.film.list'
          }
        }
      ).then(res => {
        obj.datalist = res.data.data.films
      })
    })
    const actorsFilter = (data)=>{
      if (data === undefined) return 'No actors'
      return data.map(item => item.name).join()
    }
    const onLoad =() =>{
      obj.current++
      http(
        {
          url: `/gateway?cityId=${store.state.cityId}&pageNum=${obj.current}&pageSize=10&type=1&k=6116752`,
          headers: {
            'X-Host': 'mall.film-ticket.film.list'
          }
        }
      ).then(res => {
        obj.datalist = [...obj.datalist, ...res.data.data.films]
        obj.loading = false
        if (obj.datalist.length === res.data.data.total !== 0) {
          obj.finished = true
        }
      })
    }
    const handleChangePage = (id)=> {
      router.push({
        name: 'kerwinDetail',
        params: {
          id
        }
      })
    }
    return {
      ...toRefs(obj),
      actorsFilter,
      onLoad,
      handleChangePage
    }
  }
}
</script>

<style lang="scss" scoped>
  .van-list {
    padding: 0%;
    .van-cell {
      padding: 1rem;
      overflow: hidden;
      img {
        width: 4.125rem;
        float: left;
      }
      .container{
        padding-left: 5rem;
        padding-right: .625rem;
        line-height: 1.5rem;
        .title {
        font-size: 1rem;
        text-align: left;
        }
        .content{
          font-size: .75rem;
          color: gray;
          text-align: left;

          .actors {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }

    }
  }
  .hidden {
    visibility: hidden;
  }
</style>
