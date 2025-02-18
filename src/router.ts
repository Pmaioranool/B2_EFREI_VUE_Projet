import { createWebHashHistory, createRouter } from 'vue-router'
import HomePage from './Pages/HomePage.vue'
import LoginPage from './Pages/LoginPage.vue'
import RegisterPage from './Pages/RegisterPage.vue'

const routes = [
    {
        path : '/',
        component : HomePage
    },
    {
        path : '/login',
        component : LoginPage
    },
    {
        path: '/register',
        component: RegisterPage
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router