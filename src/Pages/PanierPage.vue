<!-- <template>
  <div class="cart">
    <h2 class="title is-4">Your Cart</h2>
    <div v-if="cartItems.length === 0">Your cart is empty.</div>
    <div v-else>
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <h3 class="subtitle is-6">{{ item.name }}</h3>
        <p>{{ item.price | currency }}</p>
        <button
          class="button is-danger is-small"
          @click="removeFromCart(item.id)"
        >
          Remove
        </button>
      </div>
      <div class="total">
        <p>Total: {{ total | currency }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const cartItems = ref([]);

const addToCart = (product) => {
  const existingItem = cartItems.value.find((item) => item.id === product.id);
  if (!existingItem) {
    cartItems.value.push({ ...product });
  }
};

const removeFromCart = (id) => {
  cartItems.value = cartItems.value.filter((item) => item.id !== id);
};

const total = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.price, 0);
});

export { cartItems, addToCart, removeFromCart, total };
</script>

<style scoped>
.cart {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.total {
  font-weight: bold;
  margin-top: 1rem;
}
</style> -->
<template></template>
