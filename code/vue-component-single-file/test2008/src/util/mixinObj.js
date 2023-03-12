
const hideTabbar = {
  destroyed () {
    this.$store.commit('showTabbar', true)
  },
  mounted () {
    this.$store.commit('showTabbar', false)
  }
}

export default hideTabbar
