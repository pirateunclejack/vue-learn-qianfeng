<template>
  <div>
    <ul>
      <!-- vue-router declarative route -->

      <router-link v-for="tab in datalist" v-slot="{navigate, isActive}" :key = "tab" :to="tab" custom>
        <li :class="isActive?'kerwinactive':''" @click="navigate">{{ tab }} -- {{ isActive }}</li>
      </router-link>

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
.kerwinactive {
  color: red;
}
</style>
