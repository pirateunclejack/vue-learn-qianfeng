<template>
  <div>
    <button @click="handleLeft">left</button>
    navbar
    <button>right</button>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    myname: {
      type: String,
      default: ''
    },
    myright: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleLeft () {
      this.$emit('event')
    }
  }
}
</script>

<style lang="scss" scoped>
  div{
    background-color: purple;
  }
</style>
