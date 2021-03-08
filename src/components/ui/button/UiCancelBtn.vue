<template>
  <v-card-actions class="justify-center">
    <div class="text-center">
      <v-btn class="mr-4" color="secondary white--text"><slot>キャンセル</slot></v-btn>
    </div>
  </v-card-actions>
</template>

<script>
export default {
  name: 'UiCancelBtn',
};
</script>
