import Vue from 'vue' // ES6 import
import App from './App.vue'
// import router from './router'
// import store from './store'

Vue.config.productionTip = false

new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount('#app')

const obj = {
  name: 'jifjei',
  change: 'jifejiwjief'
}

console.log(obj)