<template>
  <div class="field">
    <label class="label">{{ data.placeholder }}</label>
    <div class="control">
      <input
        :type="data.type"
        :id="data.id"
        :placeholder="data.placeholder"
        class="input"
        @input="$emit('input', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface dataInterface {
  id: string;
  type: string;
  placeholder: string;
}

interface FieldComponentProps {
  data: dataInterface;
}

defineProps<FieldComponentProps>();
</script>

<style scoped>
.field {
  margin-bottom: 1rem;
}
</style>
