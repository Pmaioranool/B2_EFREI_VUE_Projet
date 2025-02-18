<template>
  <article :class="data.class">
    <h1 class="title is-5">
      {{ data.titleContent }}
    </h1>
    <p>
      {{ data.textContent }}
    </p>
    <router-link :v-if="data.disabled" :to="'/cook/' + data.id"
      >See more</router-link
    >
  </article>
</template>

<script setup lang="ts">
interface dataInterface {
  class: string;
  titleContent: string;
  textContent: string;
  id: string;
  disabled: boolean;
}

interface ArticleComponentProps {
  data: dataInterface;
}

defineProps<ArticleComponentProps>();
</script>
