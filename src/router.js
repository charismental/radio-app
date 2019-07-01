import Vue from 'vue'
import Router from 'vue-router'
import History from './views/History.vue'
import ComingUp from './views/ComingUp.vue'
import Requests from './views/Requests.vue'
import Schedule from './views/Schedule.vue'
import Donate from './views/Donate.vue'
import Contact from './views/Contact.vue'
import Favorites from './views/Favorites.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule
    },
    {
      path: '/queue',
      name: 'coming-up',
      component: ComingUp
    },
    {
      path: '/donate',
      name: 'donate',
      component: Donate
    },
    {
      path: '/requests',
      name: 'requests',
      component: Requests
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    },
    {
      path: '/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
