<template>
  <main>
    <h1>Our Products</h1>
    <div class="products">
      <div v-for="product in products" :key="product.id" class="product">
        <h2 class="title is-5">{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p class="price">{{ product.price }}€</p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const products = ref([]);

const fetchProducts = async () => {
  try {
    const response = await fetch("/Products.json");
    const data = await response.json();
    products.value = data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

onMounted(() => {
  fetchProducts();
});
</script>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.product {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  width: calc(33.333% - 1rem);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.price {
  font-weight: bold;
  color: #00d1b2;
}
</style>
