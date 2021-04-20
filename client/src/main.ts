import Vue, { DirectiveOptions } from 'vue'

import vuetify from './plugins/vuetify';
import i18n from './i18n'

import 'normalize.css'
import ElementUI from 'element-ui'
import SvgIcon from 'vue-svgicon'

import '@/styles/element-variables.scss'
import '@/styles/index.scss'

import App from './App.vue'
import store from './store'
import { AppModule } from '@/store/modules/app'
import router from './router'

import '@/icons/components'
import '@/permission'
import './registerServiceWorker'
import * as directives from '@/directives'




Vue.use(ElementUI, {
  size: AppModule.size, // Set element-ui default size
  i18n: (key: string, value: string) => i18n.t(key, value)
})

Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
})

// Register global directives
Object.keys(directives).forEach(key => {
  Vue.directive(key, (directives as { [key: string ]: DirectiveOptions })[key])
})

import './plugins/fontawesome'
import './icons'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
