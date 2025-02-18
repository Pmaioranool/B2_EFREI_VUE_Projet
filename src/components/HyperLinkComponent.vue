<template>
  <header>
    <nav>
      <router-link
        class="button is-link is-soft"
        :to="data.link ? data.link : '/home'"
        >{{ data.nom ? data.nom : "/home" }}</router-link
      >
    </nav>
  </header>
</template>

<script setup lang="ts">
interface dataInterface {
  link: string;
  nom: string;
}

interface HeaderComponentProps {
  data: dataInterface;
}

defineProps<HeaderComponentProps>();
</script>
