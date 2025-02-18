<template>
  <main>
    <h1>Bienvenue sur HomeMade</h1>
    <section>
      <ArticleComponent v-for="article in articles" :data="article" />
    </section>
  </main>
</template>
<script setup lang="ts">
import ArticleComponent from "../components/ArticleComponent.vue";

const articles = [
  {
    class: "box",
    textContent: "article",
  },
  {
    class: "box",
    textContent: "article",
  },
  {
    class: "box",
    textContent: "article",
  },
];
</script>
