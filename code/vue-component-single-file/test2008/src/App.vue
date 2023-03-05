<template>
  <div>
    <div class="box">
      123456789101112
    </div>
    <ul>
      <!-- vue-router declarative route -->
      <hr>
        <!-- <a href="/#/films">films</a> <br> -->
        <router-link v-slot="{navigate, isActive}" to="/films" custom>
          <li :class="isActive?'kerwinactive':''" @click="navigate">films -- {{ isActive }}</li>
        </router-link>

        <!-- <a href="/#/cinemas">cinemas</a> <br> -->
        <router-link v-slot="{navigate, isActive}" to="/cinemas" custom>
          <li :class="isActive?'kerwinactive':''" @click="navigate">cinemas -- {{ isActive }}</li>
        </router-link>

        <!-- <a href="/#/center">center</a> <br> -->
        <router-link v-slot="{navigate, isActive}" to="/center" custom>
          <li :class="isActive?'kerwinactive':''" @click="navigate">center -- {{ isActive }}</li>
        </router-link>

    </ul>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data () {
    return {
      datalist: [
        'films',
        'center',
        'cinemas'
      ]
    }
  }

}
</script>

<style lang="scss" scoped>

* {
  padding: 0%;
  margin: 0%;
}
body {
  font-size: 16px;
}
.kerwinactive {
  color: red;
}
.box {
  width: 23.4375rem;
  height: 12.5rem;
  background-color: yellow;
}
</style>
