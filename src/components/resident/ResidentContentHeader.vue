<template>
  <v-card tile elevation="0">
    <v-toolbar flat color="blue-grey lighten-4">
      <v-btn icon>
        <v-icon x-large>mdi-plus-circle</v-icon>
      </v-btn>

      <v-spacer />

      <UiContentHeaderDate />
    </v-toolbar>
  </v-card>
</template>

<script>
import UiContentHeaderDate from '@/components/ui/content/UiContentHeaderDate.vue';

export default {
  name: 'ResidentContentHeader',

  components: {
    UiContentHeaderDate,
  },
};
</script>
