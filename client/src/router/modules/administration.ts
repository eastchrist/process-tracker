import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const administrationsRouter: RouteConfig = {
  path: '/administration',
  component: Layout,
  redirect: 'noRedirect',
  name: 'administration',
  meta: {
    title: 'administration',
    icon: 'lock',
    roles: ['admin']
  },
  children: [
    {
      path: 'factoryUser',
      component: () => import('@/views/administration/factoryUser.vue'),
      name: 'factoryUser',
      meta: {
        title: 'factoryUser',
        roles: ['admin']
      }
    },
    {
      path: 'factoryFactory',
      component: () => import('@/views/administration/factoryFactory.vue'),
      name: 'factoryFactory',
      meta: {
        title: 'factoryFactory',
        roles: ['admin']
      }
    },
    {
      path: 'factoryArea',
      component: () => import('@/views/administration/factoryArea.vue'),
      name: 'factoryArea',
      meta: {
        title: 'factoryArea',
        roles: ['admin']
      }
    },
    {
      path: 'factoryTankAreaFillingFrom',
      component: () => import('@/views/administration/factoryTankAreaFillingFrom.vue'),
      name: 'factoryTankAreaFillingFrom',
      meta: {
        title: 'factoryTankAreaFillingFrom',
        roles: ['admin']
      }
    },
    {
      path: 'factoryTankArea',
      component: () => import('@/views/administration/factoryTankArea.vue'),
      name: 'factoryTankArea',
      meta: {
        title: 'factoryTankArea',
        roles: ['admin']
      }
    },
    {
      path: 'factoryTankAreaEmptyingTo',
      component: () => import('@/views/administration/factoryTankAreaEmptyingTo.vue'),
      name: 'factoryTankAreaEmptyingTo',
      meta: {
        title: 'factoryTankAreaEmptyingTo',
        roles: ['admin']
      }
    },
    {
      path: 'factorySystem',
      component: () => import('@/views/administration/factorySystem.vue'),
      name: 'factorySystem',
      meta: {
        title: 'factorySystem',
        roles: ['admin']
      }
    },
    {
      path: 'factoryPlc',
      component: () => import('@/views/administration/factoryPlc.vue'),
      name: 'factoryPlc',
      meta: {
        title: 'factoryPlc',
        roles: ['admin']
      }
    },
    {
      path: 'factoryComputer',
      component: () => import('@/views/administration/factoryComputer.vue'),
      name: 'factoryComputer',
      meta: {
        title: 'factoryComputer',
        roles: ['admin']
      }
    },
    {
      path: 'factoryEquip',
      component: () => import('@/views/administration/factoryEquip.vue'),
      name: 'factoryEquip',
      meta: {
        title: 'factoryEquip',
        roles: ['admin']
      }
    },
    {
      path: 'factoryTank',
      component: () => import('@/views/administration/factoryTank.vue'),
      name: 'factoryTank',
      meta: {
        title: 'factoryTank',
        roles: ['admin']
      }
    },

    {
      path: 'factoryDigital',
      component: () => import('@/views/administration/factoryDigital.vue'),
      name: 'factoryDigital',
      meta: {
        title: 'factoryDigital',
        roles: ['admin']
      }
    },
    {
      path: 'factoryAnalog',
      component: () => import('@/views/administration/factoryAnalog.vue'),
      name: 'factoryAnalog',
      meta: {
        title: 'factoryAnalog',
        roles: ['admin']
      }
    },

    {
      path: 'factoryCartoFonction',
      component: () => import('@/views/administration/factoryCartoFonction.vue'),
      name: 'factoryCartoFonction',
      meta: {
        title: 'factoryCartoFonction',
        roles: ['admin']
      }
    },
    {
      path: 'factoryCartoMeasure',
      component: () => import('@/views/administration/factoryCartoMeasure.vue'),
      name: 'factoryCartoMeasure',
      meta: {
        title: 'factoryCartoMeasure',
        roles: ['admin']
      }
    },
    {
      path: 'factoryCartoProject',
      component: () => import('@/views/administration/factoryCartoProject.vue'),
      name: 'factoryCartoProject',
      meta: {
        title: 'factoryCartoProject',
        roles: ['admin']
      }
    },
    {
      path: 'factoryCartoDataProject',
      component: () => import('@/views/administration/factoryCartoDataProject.vue'),
      name: 'factoryCartoDataProject',
      meta: {
        title: 'factoryCartoDataProject',
        roles: ['admin']
      }
    },
  ]
}

export default administrationsRouter
