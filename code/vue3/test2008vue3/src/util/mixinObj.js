
const hideTabbar = {
  unmounted () {
    this.$store.commit('showTabbar', true)
  },
  mounted () {
    this.$store.commit('showTabbar', false)
  }
}

export default hideTabbar
