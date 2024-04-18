import "./assets/sass/main.css"

import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import App from './App.vue'
import Home from './views/HomeView.vue'
import FR from './views/fr.vue'
import EN from './views/en.vue'

const app = createApp(App)

const router = createRouter(
    {
        history: createWebHistory(),
        routes:[
            {path: '/MsfmultiBD/', name: 'Home', component: Home},
            {path: '/MsfmultiBD/FR', name: 'fr', component: FR},
            {path: '/MsfmultiBD/EN', name: 'en', component: EN}
        ]
    }
)

app.use(router)

app.mount('#app')
