import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

/* Layout */
import Layout from '@/layout/index.vue'

/* Router modules */

import administrationRouter from './modules/administration'
import cartographyRouter from "@/router/modules/cartography";

Vue.use(VueRouter)

export const constantRoutes: RouteConfig[] = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import(/* webpackChunkName: "redirect" */ '@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    meta: { hidden: true }
  },
  {
    path: '/register',
    component: () => import(/* webpackChunkName: "register" */ '@/views/register/index.vue'),
    meta: { hidden: true }
  },
  {
    path: '/auth-redirect',
    component: () => import(/* webpackChunkName: "auth-redirect" */ '@/views/login/auth-redirect.vue'),
    meta: { hidden: true }
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/error-page/404.vue'),
    meta: { hidden: true }
  },
  {
    path: '/401',
    component: () => import(/* webpackChunkName: "401" */ '@/views/error-page/401.vue'),
    meta: { hidden: true }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
        name: 'dashboard',
        meta: {
          title: 'dashboard',
          icon: 'dashboard',
          affix: true
        }
      }
    ]
  },
  {
    path: '/Entreprise',
    component: Layout,
    redirect: '/Entreprise',
    meta: {
      title: 'Entreprise',
      icon: 'lock'
    },
    children: [
      {
        path: 'Entreprise',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/visitor/Entreprise.vue'),
        name: 'Entreprise',
        meta: {
          title: 'Entreprise',
          icon: 'dashboard',
          roles: ['visitor'] ,
        }
      }
    ]
  },
  {
    path: '/Methodology',
    component: Layout,
    redirect: '/Methodology',
    meta: {
      title: 'Methodology',
      icon: 'lock',
      roles: ['visitor']
    },
    children: [
      {
        path: 'Methodology',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/visitor/Methodology.vue'),
        name: 'Methodology',
        meta: {
          title: 'Methodology',
          icon: 'dashboard',
        }
      }
    ]
  },
  {
    path: '/ContactUs',
    component: Layout,
    redirect: '/ContactUs',
    meta: {
      title: 'ContactUs',
      icon: 'lock',
      roles: ['visitor']
    },
    children: [
      {
        path: 'ContactUs',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/visitor/ContactUs.vue'),
        name: 'ContactUs',
        meta: {
          title: 'ContactUs',
          icon: 'dashboard',
        }
      }
    ]
  }

]
export const asyncRoutes: RouteConfig[] = [
  administrationRouter,
  cartographyRouter
]

const createRouter = () => new VueRouter({
  // mode: 'history',  // Disabled due to Github Pages doesn't support this, enable this if you need.
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes: constantRoutes
})


const router = createRouter()
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  (router as any).matcher = (newRouter as any).matcher // reset router
}
export default router
