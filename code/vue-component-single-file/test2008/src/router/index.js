import Vue from 'vue'
import VueRouter from 'vue-router'
import MaizuoFilms from '@/views/MaizuoFilms.vue'
import MaizuoCenter from '@/views/MaizuoCenter.vue'
import MaizuoCinemas from '@/views/MaizuoCinemas.vue'
import MaizuoSearch from '@/views/MaizuoSearch.vue'
import MaizuoNowplaying from '@/views/films/MaizuoNowplaying.vue'
import MaizuoComingsoon from '@/views/films/MaizuoComingsoon.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/films',
    name: 'films',
    component: MaizuoFilms,
    // nesting route
    children: [
      {
        path: 'nowplaying',
        name: 'nowplaying',
        component: MaizuoNowplaying
      },
      {
        path: 'comingsoon',
        name: 'comingsoon',
        component: MaizuoComingsoon
      },
      {
        path: '/films',
        component: MaizuoNowplaying,
        redirect: '/films/nowplaying'
      }

    ]
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
    path: '/cinemas/search',
    component: MaizuoSearch
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
