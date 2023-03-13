<template>
  <div>
    Hello vue3
    <input type="text" v-model="mytext">
    {{ mytext }}
    <button>Button</button>
  </div>
  <Hello></Hello>
  <div v-hello>v-hello</div>
</template>

<script>
import hello from '@/Hello.vue'
export default {
  data (){
    return {
      mytext: ''
    }
  },
  components : {
    hello
  },
  directives: {
    hello: {
      mounted(el){
        console.log('mounted')
        el.style.background = 'red'
      }
    }
  }
}
</script>
