import './assets/base.css'

import Aura from "@primeuix/themes/aura"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: 'dark'
        }
    }
})
app.use(i18n)
app.mount('#app')
