<template>
  <div>
    <span v-for="e in errors" :key="e" class="red--text">{{ e }}</span>
  </div>
</template>

<script>
export default {
  name: `ContentEditorErrors`,
  props: {
    errors: {
      type: Array,
      required: true,
    },
  },
};
</script>
