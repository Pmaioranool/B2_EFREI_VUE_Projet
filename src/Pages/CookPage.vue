<template>
  <main>
    <h1>Chef Details</h1>
    <ArticleComponent
      v-if="cook"
      :data="{
        class: 'box',
        titleContent: cook.Name,
        textContent: cook.Nationality,
        id: cook.id,
        disabled: true,
      }"
    />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import ArticleComponent from "../components/ArticleComponent.vue";

const route = useRoute();
const cookId = computed(() => route.params.id);
const cook = ref(null);

const fetchCook = async () => {
  try {
    const response = await fetch("/Cook.json");
    const data = await response.json();
    cook.value = data.find((c: any) => c.id === cookId.value);
  } catch (error) {
    console.error("Error fetching cook:", error);
  }
};

onMounted(() => {
  fetchCook();
});
</script>
