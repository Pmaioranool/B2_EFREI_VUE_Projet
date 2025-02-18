<template>
  <article>
    <label :for="String(data.id)"></label>
    <input
      class="input"
      :type="data.type ? data.type : 'text'"
      :id="String(data.id)"
      :placeholder="data.placeholder"
    />
  </article>
</template>
<script setup lang="ts">
interface dataInterface {
  id: string | number;
  placeholder: string;
  type: string;
}

interface FieldComponentProps {
  data: dataInterface;
}

defineProps<FieldComponentProps>();
</script>
