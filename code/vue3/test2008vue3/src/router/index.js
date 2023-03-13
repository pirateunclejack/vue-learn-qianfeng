import { createRouter, createWebHistory } from 'vue-router'
import MaizuoFilms from '@/views/MaizuoFilms.vue'
import MaizuoCinemas from '@/views/MaizuoCinemas.vue'
import MaizuoSearch from '@/views/MaizuoSearch.vue'
import MaizuoDetail from '@/views/MaizuoDetail.vue'
import MaizuoNowplaying from '@/views/films/MaizuoNowplaying.vue'
import MaizuoComingsoon from '@/views/films/MaizuoComingsoon.vue'
import MaizuoLogin from '@/views/MaizuoLogin.vue'
import MaizuoCity from '@/views/MaizuoCity.vue'

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
    path: '/detail',
    component: MaizuoDetail
  },
  {
    name: 'kerwinDetail',
    path: '/detail/:id',
    component: MaizuoDetail
  },
  {
    path: '/center',
    name: 'center',
    component: () => import('@/views/MaizuoCenter'), // lazy import
    meta: {
      isKerwinRequired: true
    }
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('@/views/MaizuoOrder'), // lazy import
    meta: {
      isKerwinRequired: true
    }
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
    path: '/login',
    component: MaizuoLogin
  },
  {
    path: '/city',
    component: MaizuoCity,
    name: 'city'
  },
  {
    path: '/:any',
    redirect: {
      name: 'films'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
