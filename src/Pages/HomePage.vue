<template>
  <main>
    <h1 v-if="welcomeMessage">{{ welcomeMessage }}</h1>
    <h1 v-else>Home Page</h1>
    <p v-if="loginError" class="error">{{ loginError }}</p>
  </main>
</template>

<script lang="ts" setup>
import { useAuthStore } from "../stores/auth.ts";
import { computed } from "vue";

const authStore = useAuthStore();
const welcomeMessage = computed(() => authStore.WelcomeMessage);
const loginError = computed(() => authStore.loginError);
</script>

<style scoped>
.error {
  color: red;
}
</style>
