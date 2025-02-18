<template>
  <main>
    <h1>Our cooks</h1>
    <ArticleComponent
      v-for="cook in cooks"
      :key="cook.id"
      :data="{
        class: 'box',
        titleContent: cook.Name,
        textContent: cook.Nationality,
        id: cook.id,
        disabled: false,
      }"
    />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import ArticleComponent from "../components/ArticleComponent.vue";

const cooks = ref([]);

const fetchCooks = async () => {
  try {
    const response = await fetch("/Cook.json");
    const data = await response.json();
    cooks.value = data;
  } catch (error) {
    console.error("Error fetching cooks:", error);
  }
};

onMounted(() => {
  fetchCooks();
});
</script>
