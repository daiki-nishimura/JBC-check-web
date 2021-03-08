<template>
  <v-card-actions class="justify-center">
    <div class="ma-3">
      <v-btn class="white--text" color="primary"><slot>登録</slot></v-btn>
    </div>
  </v-card-actions>
</template>

<script>
export default {
  name: 'UiCancelBtn',
};
</script>
