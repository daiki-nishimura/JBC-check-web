<template>
  <v-app>
    <ContentMenu />
  </v-app>
</template>

<script>
import ContentMenu from '@/components/ContentMenu.vue';

export default {
  name: 'ResidentList',

  components: {
    ContentMenu,
  },
};
</script>
