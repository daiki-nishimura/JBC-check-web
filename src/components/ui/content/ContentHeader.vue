<template>
  <v-card tile elevation="0">
    <v-toolbar flat color="blue-grey lighten-4">
      <slot />
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: 'ContentHeader',
};
</script>
