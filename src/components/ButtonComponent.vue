<template>
  <button :type="data.type ? data.type : 'button'" :id="String(data.id)">
    {{ data.textContent }}
  </button>
</template>

<script setup lang="ts">
interface dataInterface {
  type?: "submit" | "reset" | "button";
  id: string | number;
  textContent: string;
}

interface buttonComponentProps {
  data: dataInterface;
}
defineProps<buttonComponentProps>();
</script>
