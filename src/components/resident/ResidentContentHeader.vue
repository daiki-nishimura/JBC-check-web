<template>
  <UiContentHeader>
    <v-btn icon>
      <v-icon x-large>mdi-plus-circle</v-icon>
    </v-btn>

    <v-spacer />

    <UiContentHeaderDate />
  </UiContentHeader>
</template>

<script>
import UiContentHeaderDate from '@/components/ui/content/UiContentHeaderDate.vue';
import UiContentHeader from '@/components/ui/content/UiContentHeader.vue';

export default {
  name: 'ResidentContentHeader',

  components: {
    UiContentHeaderDate,
    UiContentHeader,
  },
};
</script>
