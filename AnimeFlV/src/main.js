import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'

import directorio from './views/directorio.vue'
import home from './views/home.vue'

const router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: home },
        { path: '/directorio', component: directorio },
    ]
})

createApp(App).use(router).mount('#app')
