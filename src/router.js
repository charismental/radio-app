import Vue from 'vue'
import Router from 'vue-router'
import History from './views/History.vue'
import ComingUp from './views/ComingUp.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'history',
      component: History
    },
    {
      path: '/queue',
      name: 'coming-up',
      component: ComingUp
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
