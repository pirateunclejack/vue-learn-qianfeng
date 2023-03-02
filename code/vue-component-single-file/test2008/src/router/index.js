import Vue from 'vue'
import VueRouter from 'vue-router'
import MaizuoFilms from '@/views/MaizuoFilms.vue'
import MaizuoCenter from '@/views/MaizuoCenter.vue'
import MaizuoCinemas from '@/views/MaizuoCinemas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/films',
    name: 'films',
    component: MaizuoFilms
  },
  {
    path: '/center',
    name: 'center',
    component: MaizuoCenter
  },
  {
    path: '/cinemas',
    name: 'cinemas',
    component: MaizuoCinemas
  },
  {
    path: '/*',
    redirect: '/films'
  }
]

const router = new VueRouter({
  routes
})

export default router
