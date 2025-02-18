<template>
<header>
    <nav>
    <ul>
        <li>
            <router-link to="/">Home</router-link>
        </li>
        <li>
            <router-link to="/login">Connexion</router-link>
        </li>
        <li>
            <router-link to="/register">Inscription</router-link>
        </li>
    </ul>
    <ul>
        <li>
            <a v-on:click="handleDeconnexion">Déconnexion</a>
        </li>

    </ul>
    </nav>
</header>

</template>


<script lang="ts" setup>
import { computed } from 'vue';
import {useRoute, useRouter} from 'vue-router';
import { useAuthStore } from '../stores/auth';
const route = useRoute();
const router = useRouter();
const isLoginPage = computed(() => route.path === '/login')

const store = useAuthStore() as any;



const handleDeconnexion = () => {
    router.push('/')
    store.isLogin.value = false;
}
</script>