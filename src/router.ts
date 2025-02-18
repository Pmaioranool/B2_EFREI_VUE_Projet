import { createWebHashHistory, createRouter } from 'vue-router'
import HomePage from './Pages/HomePage.vue'

const routes = [
    {
        path: '/',
        component: HomePage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router