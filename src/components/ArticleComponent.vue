<template>
  <article :class="data.class">{{ data.textContent }}</article>
</template>

<script setup lang="ts">
interface dataInterface {
  class: string;
  textContent: string;
}

interface ArticleComponentProps {
  data: dataInterface;
}

defineProps<ArticleComponentProps>();
</script>
