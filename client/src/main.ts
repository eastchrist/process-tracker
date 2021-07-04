import Vue, { DirectiveOptions } from 'vue'

import i18n from './i18n'

import 'normalize.css'
import ElementUI from 'element-ui'
//import SvgIcon from 'vue-svgicon'

import '@/styles/index.scss'

import App from './App.vue'
import store from './store'
import { AppModule } from '@/store/modules/app'
import router from './router'

//import '@/iconsOld/componentsOld'
import '@/permission'
import './registerServiceWorker'
import * as directives from '@/directives'

//import PersoIcons from '@/componentsOld/Icons/iconsOld.vue'
//Vue.use(PersoIcons)
Vue.component('PersoIcons', require('@/components/Icons/icons').default)

Vue.use(ElementUI, {
  size: AppModule.size, // Set element-ui default size
  i18n: (key: string, value: string) => i18n.t(key, value)
})

// Register global directives
Object.keys(directives).forEach(key => {
  Vue.directive(key, (directives as { [key: string ]: DirectiveOptions })[key])
})

//import './plugins/fontawesome'
//import './iconsOld'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
