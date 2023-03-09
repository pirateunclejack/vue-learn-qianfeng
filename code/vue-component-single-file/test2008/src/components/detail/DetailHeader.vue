<template>
  <div class="header">
    <i class="iconfont icon-left" @click="handleBack"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    handleBack () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  z-index: 2;
  padding: 0%;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2.75rem;
  line-height: 2.75rem;
  background-color: white;
  text-align: center;
  i {
    font-size: 1.875rem;
    position: fixed;
    left: .625rem;
    top: .125rem;
  }
}
</style>
