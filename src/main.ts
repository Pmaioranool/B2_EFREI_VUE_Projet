import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createWebHashHistory, createRouter } from 'vue-router'
import './style.css'
import App from './App.vue'

import HomePage from './pages/HomePage.vue'
import LoginPage from './pages/LoginPage.vue'

const routes = [
    {
        path : '/',
        component : HomePage
    },
    {
        path : '/login',
        component : LoginPage
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)
const pinia = createPinia()

app.use(pinia).use(router).mount('#app')
