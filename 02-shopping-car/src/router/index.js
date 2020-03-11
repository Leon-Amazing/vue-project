import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'
import Car from '@/components/Car'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/car',
      component: Car
    }
  ]
})
