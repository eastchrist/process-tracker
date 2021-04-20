import Vue from 'vue'
//import VueI18n, { LocaleMessages } from 'vue-i18n'
import VueI18n from 'vue-i18n'

import { getLanguage } from '@/utils/cookies'

Vue.use(VueI18n)
import enLocale from './locales/en';
import frLocale from './locales/fr'

//TODO CCA
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementFrLocale from 'element-ui/lib/locale/lang/fr'
const messages = {
  en: {
    ...elementEnLocale,
    ...enLocale
  },
  fr: {
    ...elementFrLocale,
    ...frLocale
  }
}

export const getLocale = () => {
  // TODO
  const cookieLanguage = getLanguage()
  if (cookieLanguage) {
    document.documentElement.lang = cookieLanguage
    return cookieLanguage
  }

  const language = navigator.language.toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      document.documentElement.lang = locale
      return locale
    }
  }

  // Default language is english
  return 'en'
}



export default new VueI18n({
  locale: getLocale(),
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages
})
