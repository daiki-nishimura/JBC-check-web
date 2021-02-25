<template>
  <v-card tile elevation="0">
    <v-toolbar flat color="blue-grey lighten-4">
      <v-btn icon>
        <v-icon x-large>mdi-plus-circle</v-icon>
      </v-btn>

      <v-spacer />

      <ContentHeaderDate />
    </v-toolbar>
  </v-card>
</template>

<script>
import ContentHeaderDate from '@/components/ui/content/ContentHeaderDate.vue';

export default {
  name: 'ResidentContentHeader',

  components: {
    ContentHeaderDate,
  },
};
</script>
