import { createWebHashHistory, createRouter } from 'vue-router'
import HomePage from './Pages/HomePage.vue'
import LoginPage from './Pages/LoginPage.vue'
import RegisterPage from './Pages/RegisterPage.vue'
import CookPage from './Pages/CookPage.vue'
import CooksPage from './Pages/CooksPage.vue'
import ProductPage from './Pages/ProductPage.vue'
import PanierPage from './Pages/PanierPage.vue'

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
    },
    {
        path: '/cook',
        component: CooksPage
    },
    {
        path: '/cook/:id',
        component: CookPage
    },
    {
        path: '/product',
        component: ProductPage
    },
    {
        path: '/panier',
        component: PanierPage
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router