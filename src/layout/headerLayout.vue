<template>
  <header>
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">Home</router-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link v-if="!store.isLogin" class="navbar-item" to="/login"
            >Connexion</router-link
          >
          <router-link v-if="!store.isLogin" class="navbar-item" to="/register"
            >Inscription</router-link
          >
          <a
            v-if="store.isLogin"
            class="navbar-item"
            v-on:click="handleDeconnexion"
            >Déconnexion</a
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "../Stores/auth.ts";

const route = useRoute();
const router = useRouter();
const store = useAuthStore();

const handleDeconnexion = () => {
  store.logout();
  router.push("/");
};
</script>

<style scoped></style>
