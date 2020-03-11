import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/login'
import Layout from '@/views/layout/layout'
import Admin from '@/views/admin'
import Hot from '@/views/hot'
import Top from '@/views/top'
import Future from '@/views/future'
import Details from '@/views/details'
import Collect from '@/views/collect'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Admin,
          name: 'index',
          meta: {
            title: '首页',
            index: 0
          }
        },
        {
          path: 'hot',
          component: Hot,
          name: 'hot',
          meta: {
            title: '热映',
            index: 1
          }
        },
        {
          path: 'top',
          component: Top,
          name: 'top',
          meta: {
            title: 'Top250',
            index: 2
          }
        },
        {
          path: 'future',
          component: Future,
          name: 'future',
          meta: {
            title: '即将上映',
            index: 3
          }
        }
      ]
    },
    {
      path: '/details',
      component: Details,
      name: 'details',
      meta: {
        title: '详情'
      }
    },
    {
      path: '/:collect',
      component: Collect,
      name: 'collect'
    },
    {
      path: '*',
      redirect: (to) => {
        return '/'
      }
    }
  ]
})
