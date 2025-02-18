<template>
  <button
    :class="data.class"
    :type="data.type ? data.type : 'button'"
    :id="String(data.id)"
    :disabled="data.disabled ? data.disabled : false"
  >
    {{ data.textContent }}
  </button>
</template>
<script setup lang="ts">
interface dataInterface {
  id: string | number;
  textContent: string;
  type: "button" | "submit" | "reset";
  disabled: boolean;
  class: string;
}

interface ButtonComponentProps {
  data: dataInterface;
}

defineProps<ButtonComponentProps>();
</script>
