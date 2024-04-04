import "./assets/sass/main.css"

import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import App from './App.vue'
import Home from './views/HomeView.vue'
import FR from './views/fr.vue'

const app = createApp(App)

const router = createRouter(
    {
        history: createWebHistory(),
        routes:[
            {path: '/DE', name: 'Home', component: Home},
            {path: '/FR', name: 'fr', component: FR}
        ]
    }
)

app.use(router)

app.mount('#app')
