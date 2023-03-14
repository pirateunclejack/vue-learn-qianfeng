import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Search from 'vant'

createApp(App)
  .use(router)
  .use(store)
  .use(Search)
  .mount('#app')
