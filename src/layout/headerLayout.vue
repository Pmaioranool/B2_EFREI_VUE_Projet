<template>
  <header>
    <nav class="">
      <router-link class="button is-link is-soft" to="/">Home</router-link>
      <router-link
        class="button is-link is-soft"
        :to="isLoggingIn ? '/register' : '/login'"
        >{{ isLoggingIn ? "register" : "login" }}</router-link
      >
    </nav>
  </header>
</template>
<script setup lang="ts">
interface Props {
  isLoggingIn: boolean;
}

defineProps<Props>();
</script>
