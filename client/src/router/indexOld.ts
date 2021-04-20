import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Dashboard from '@/views/dashboard/index.vue'

import Login from '@/views/login/index.vue'
import Register from '@/views/register/index.vue'

import Entreprise from '@/views/visitor/Entreprise.vue'
import Methodology from '@/views/visitor/Methodology.vue'
import ContactUs from '@/views/visitor/ContactUs.vue'

import AdminPassword from '@/views/administration/factoryUser.vue'
import AdminFactoryMain from '@/views/administration/factoryFactory.vue'
import AdminFactoryInfo from '@/views/administration/factoryPlc.vue'
import AdminNodes from '@/views/administration/node.vue'

import MainFunct from '@/views/cartography/MainFunct.vue'
import ManagerFunct from '@/views/cartography/ManagerFunct.vue'
import OperatorFunctAll from '@/views/cartography/OperatorFunctAll.vue'
import OperatorFunctTodo from '@/views/cartography/OperatorFunctTodo.vue'
import MainProject from '@/views/cartography/MainProject.vue'
import ManagerProject from '@/views/cartography/ManagerProject.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },

  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },

  {
    path: '/Entreprise',
    name: 'Entreprise',
    component: Entreprise
  },
  {
    path: '/Methodology',
    name: 'Methodology',
    component: Methodology
  },
  {
    path: '/ContactUs',
    name: 'ContactUs',
    component: ContactUs
  },

  {
    path: '/Admin/Password',
    name: 'AdminPassword',
    component: AdminPassword
  },
  {
    path: '/Admin/FactoryMain',
    name: 'AdminFactoryMain',
    component: AdminFactoryMain
  },
  {
    path: '/Admin/FactoryInfo',
    name: 'AdminFactoryInfo',
    component: AdminFactoryInfo
  },
  {
    path: '/Admin/Nodes',
    name: 'AdminNodes',
    component: AdminNodes
  },

  {
    path: '/Carto/MainFunct',
    name: 'MainFunct',
    component: MainFunct
  },
  {
    path: '/Carto/ManagerFunct',
    name: 'ManagerFunct',
    component: ManagerFunct
  },
  {
    path: '/Carto/OperatorFunctAll',
    name: 'OperatorFunctAll',
    component: OperatorFunctAll
  },
  {
    path: '/Carto/OperatorFunctTodo',
    name: 'OperatorFunctTodo',
    component: OperatorFunctTodo
  },
  {
    path: '/Carto/MainProject',
    name: 'MainProject',
    component: MainProject
  },
  {
    path: '/Carto/ManagerProject',
    name: 'ManagerProject',
    component: ManagerProject
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
