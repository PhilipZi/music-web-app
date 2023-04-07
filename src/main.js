import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import VeeValidatePlugin from './includes/validation'
import { auth } from './includes/firebase'

import './assets/base.css'
import './assets/main.css'

let app

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)

    app.use(createPinia())
    app.use(VeeValidatePlugin)

    app.mount('#app')
  }
})
