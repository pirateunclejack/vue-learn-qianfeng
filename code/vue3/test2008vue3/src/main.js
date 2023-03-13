import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Search from 'vant'
import List from 'vant'

createApp(App)
  .use(router)
  .use(store)
  .use(Search)
  .use(List)
  .mount('#app')
