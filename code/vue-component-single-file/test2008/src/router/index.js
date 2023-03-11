import Vue from 'vue'
import VueRouter from 'vue-router'
import MaizuoFilms from '@/views/MaizuoFilms.vue'
// import MaizuoCenter from '@/views/MaizuoCenter.vue'
import MaizuoCinemas from '@/views/MaizuoCinemas.vue'
import MaizuoSearch from '@/views/MaizuoSearch.vue'
import MaizuoDetail from '@/views/MaizuoDetail.vue'
import MaizuoNowplaying from '@/views/films/MaizuoNowplaying.vue'
import MaizuoComingsoon from '@/views/films/MaizuoComingsoon.vue'
// import MaizuoOrder from '@/views/MaizuoOrder.vue'
import MaizuoLogin from '@/views/MaizuoLogin.vue'
import MaizuoCity from '@/views/MaizuoCity.vue'

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
    // beforeEnter: (to, from, next) => {
    //   if (localStorage.getItem('token')) {
    //     next()
    //   } else {
    //     next('/login')
    //   }
    // }
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
    path: '/*',
    redirect: '/films'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// global intercept
// router.beforeEach((to, from, next) => {
//   // console.log(to.fullPath)
//   console.log(to)
//   // if (to.fullPath === '/center') {
//   if (to.meta.isKerwinRequired) {
//     // If token is in localstorage
//     if (localStorage.getItem('token')) {
//       next()
//     } else {
//       // next('/login')
//       next({
//         path: 'login',
//         query: {
//           redirect: to.fullPath
//         }
//       })
//     }
//   } else {
//     next()
//   }
// })

export default router
