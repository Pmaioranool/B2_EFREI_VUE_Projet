<template>
  <main>
    <h1 v-if="welcomeMessage">{{ welcomeMessage }}</h1>
     <h1 v-else >Home Page</h1>
    </main>
</template>

<script lang="ts" setup>
import { useAuthStore } from '../stores/auth.ts';
import { computed } from 'vue';

const authStore = useAuthStore();
const welcomeMessage = computed(() => authStore.WelcomeMessage)
</script>

<style>

</style>