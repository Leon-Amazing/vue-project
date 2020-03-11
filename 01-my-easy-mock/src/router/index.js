import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '@/components/Welcome'
import Login from '@/components/Login'
import Index from '@/components/Index'
import Project from '@/components/Project'
import Workbench from '@/components/workbench'
import Document from '@/components/Document'
import {getCookie} from '@/utils/cookie'
Vue.use(VueRouter)
const router = new VueRouter({
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      component: Welcome
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: 'project',
          component: Project,
          meta: {
            isLogin: true
          }
        },
        {
          path: 'workbench',
          component: Workbench,
          meta: {
            isLogin: true
          }
        },
        {
          path: 'document',
          component: Document,
          meta: {
            isLogin: false
          }
        },
        {
          path: '/',
          redirect: 'project'

        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (!to.meta.isLogin) {
    next()
    return
  }
  if (getCookie('username')) {
    next()
  } else {
    router.push({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }
})
export default router
