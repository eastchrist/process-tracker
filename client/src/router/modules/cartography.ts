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
    roles: [ 'admin', 'manager', 'operator']
  },
  children: [
    {
      path: 'OperatorMeasure',
      component: () => import('@/views/cartography/OperatorMeasure.vue'),
      name: '/cartography/OperatorMeasure',
      props: true,
      meta: {
        hidden: true,
        title: 'OperatorMeasure',
        roles: [ 'admin', 'manager', 'operator']
      }
    },
    {
      path: 'MainFunct',
      component: () => import('@/views/cartography/MainFunct.vue'),
      name: 'MainFunct',
      meta: {
        title: 'MainFunct',
        roles: [ 'admin', 'manager', 'operator'],
        icon: 'icon',
      }
    },
    {
      path: 'ManagerFunctEdit',
      component: () => import('@/views/cartography/ManagerFunctEdit.vue'),
      name: 'ManagerFunctEdit',
      meta: {
        title: 'ManagerFunctEdit',
        roles: [ 'admin', 'manager' ],
        icon: 'edit',
      }
    },
    {
      path: 'ManagerProject',
      component: () => import('@/views/cartography/ManagerProject.vue'),
      name: 'ManagerProject',
      meta: {
        title: 'ManagerProject',
        roles: [ 'admin', 'manager' ],
        icon: 'ion-documents-outline',
      }
    },
    {
      path: 'ManagerFunctAll',
      component: () => import('@/views/cartography/ManagerFunctAll.vue'),
      name: 'ManagerFunctAll',
      meta: {
        title: 'ManagerFunctAll',
        roles: [ 'admin', 'manager' ],
        icon: 'education',
      }
    },
    {
      path: 'OperatorFunctAll',
      component: () => import('@/views/cartography/OperatorFunctAll.vue'),
      name: 'OperatorFunctAll',
      meta: {
        title: 'OperatorFunctAll',
        roles: [ 'admin', 'operator'],
        icon: 'education',
      }
    },
  ]
}

export default cartographysRouter
