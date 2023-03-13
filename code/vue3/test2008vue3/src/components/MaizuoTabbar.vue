<template>
  <footer>
    <ul>
      <!-- vue-router declarative route -->
        <!-- <a href="/#/films">films</a> <br> -->
        <router-link v-slot="{navigate, isActive}" to="/films" custom>
          <li :class="isActive?'kerwinactive':''"  @click="navigate"><i class="iconfont icon-live1"></i><span>films</span></li>
        </router-link>

        <!-- <a href="/#/cinemas">cinemas</a> <br> -->
        <router-link v-slot="{navigate, isActive}" to="/cinemas" custom>
          <li :class="isActive?'kerwinactive':''"  @click="navigate"><i class="iconfont icon-home"></i><span>cinemas</span></li>
        </router-link>

        <!-- <a href="/#/center">center</a> <br> -->
        <router-link v-slot="{navigate, isActive}" to="/center" custom>
          <li :class="isActive?'kerwinactive':''" @click="navigate"><i class="iconfont icon-me" ></i><span>center</span></li>
        </router-link>

    </ul>
  </footer>
</template>

<script>
import '../assets/iconfont/iconfont.css'
export default {

}
</script>

<style lang="scss" scoped>
footer{
  z-index: 5;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  background-color: white;
  ul {
    margin: 0%;
    padding: 0%;
    display: flex;
    li {
      flex: 1;
      line-height: 1.5rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      i {
        font-size: 1.25rem;
      }
      span {
        font-size: 1rem;
      }
    }
  }
  .kerwinactive{
    color: red
  }
}
</style>
