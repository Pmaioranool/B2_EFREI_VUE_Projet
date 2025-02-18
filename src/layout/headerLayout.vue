<template>
  <header>
    <nav class="navbar is-primary">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link
          v-if="store.isLogin"
          class="navbar-item to-right"
          to="/panier"
          >panier
        </router-link>
        <div
          class="navbar-burger"
          @click="toggleNavbar"
          :class="{ 'is-active': isActive }"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': isActive }">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/cook">Our Cook</router-link>
          <router-link class="navbar-item" to="/product">Dishes</router-link>
          <router-link v-if="!store.isLogin" class="navbar-item" to="/login"
            >Connexion</router-link
          >
          <router-link v-if="!store.isLogin" class="navbar-item" to="/register"
            >Inscription</router-link
          >
          <a v-if="store.isLogin" class="navbar-item" @click="handleDeconnexion"
            >Déconnexion</a
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth.ts";

const router = useRouter();
const store = useAuthStore();
const isActive = ref(false);

const handleDeconnexion = () => {
  store.logout();
  router.push("/");
};

const toggleNavbar = () => {
  isActive.value = !isActive.value;
};
</script>

<style scoped>
.navbar {
  background-color: #00d1b2;
  padding: 1rem;
}
.navbar-item {
  color: white;
}
</style>
