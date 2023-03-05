<template>
  <div>
    login
    <button @click="handleLogin">Login</button>
  </div>
</template>
<script>
export default {
  methods: {
    handleLogin () {
      setTimeout(() => {
        localStorage.setItem('token', 'token from backend')
        // this.$router.back()
        // this.$router.push('/center')
        // 1. get query field
        console.log(this.$router.query.redirect)
        // 2. redirect ro query
        this.$router.push(this.$router.query.redirect)
      }, 0)
    }
  }
}
</script>
