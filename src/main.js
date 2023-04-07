import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import VeeValidatePlugin from './includes/validation'
import './includes/firebase'

import './assets/base.css'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(VeeValidatePlugin)

app.mount('#app')
