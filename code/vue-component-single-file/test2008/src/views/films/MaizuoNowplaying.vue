<template>
  <div>
    nowplaying
    <ul>
      <li v-for="data in datalist" :key="data" @click="handleChangePage(data)">
        {{ data }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      datalist: [111, 222, 333, 444]
    }
  },
  methods: {
    handleChangePage (id) {
      console.log(id)
      // programmatic route
      // location.href = '#/detail'
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>
