import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'

export default createI18n({
  local: 'en',
  fallbackLocale: 'en',
  messages: {
    en
  }
})
