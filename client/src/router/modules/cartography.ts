import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const cartographysRouter: RouteConfig = {
  path: '/cartography',
  component: Layout,
  redirect: 'noRedirect',
  name: 'cartography',
  meta: {
    title: 'cartography',
    icon: 'chart',
    roles: ['admin', 'manager', 'operator'],
    alwaysShow: true
  },
  children: [
    {
      path: 'OperatorFunctAll',
      component: () => import('@/views/cartography/OperatorFunctAll.vue'),
      name: 'OperatorFunctAll',
      meta: {
        title: 'OperatorFunctAll',
        roles: ['admin', 'manager', 'operator']
      }
    },
    {
      path: 'OperatorFunctTodo',
      component: () => import('@/views/cartography/OperatorFunctTodo.vue'),
      name: 'OperatorFunctTodo',
      meta: {
        title: 'OperatorFunctTodo',
        roles: ['admin', 'manager', 'operator']
      }
    },
    {
      path: 'MainProject',
      component: () => import('@/views/cartography/MainProject.vue'),
      name: 'MainProject',
      meta: {
        title: 'MainProject',
        roles: ['admin', 'manager', 'operator']
      }
    },
    {
      path: 'projectManager',
      component: () => import('@/views/cartography/ManagerProject.vue'),
      name: 'projectManager',
      meta: {
        title: 'projectManager',
        roles: ['admin', 'manager', 'operator']
      }
    },
    {
      path: 'MainFunct',
      component: () => import('@/views/cartography/MainFunct.vue'),
      name: 'MainFunct',
      meta: {
        title: 'MainFunct',
        roles: ['admin', 'manager', 'operator']
      }
    },
    {
      path: 'ManagerFunct',
      component: () => import('@/views/cartography/ManagerFunct.vue'),
      name: 'ManagerFunct',
      meta: {
        title: 'ManagerFunct',
        roles: ['admin', 'manager', 'operator']
      }
    }
  ]
}

export default cartographysRouter
