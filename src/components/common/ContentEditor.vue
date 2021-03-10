<template>
  <v-container>
    <v-card class="mx-auto" height="1088" max-width="800">
      <v-card-text>
        <slot />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: `ContentEditor`,
};
</script>
