<template>
  <ul>
    <router-link v-slot="{navigate, isActive}" to="/films/nowplaying" custom>
      <li  @click="navigate">
        <span :class="isActive? 'kerwinactive':''">Now Playing</span>
      </li>
    </router-link>
    <router-link v-slot="{navigate, isActive}" to="/films/comingsoon" custom>
      <li  @click="navigate">
          <span :class="isActive? 'kerwinactive':''">Coming Soon</span>
      </li>
    </router-link>
  </ul>
</template>

<style lang="scss" scoped>
* {
  padding: 0%;
  margin: 0%;
  z-index: 2;
}
ul {
  display: flex;
  height: 2.5rem;
  line-height: 2rem;
  li {
    flex: 1;
    text-align: center;
    list-style: none;
  }
}
.kerwinactive{
  color: red;
  border-bottom: .125rem solid red;
}
</style>
