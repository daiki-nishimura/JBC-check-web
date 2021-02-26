<template>
  <v-app>
    <AppNavigation />
    <AppNavigationDrawer />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppNavigation from '@/components/common/AppNavigation.vue';
import AppNavigationDrawer from '@/components/common/AppNavigationDrawer.vue';

export default {
  name: 'App',

  components: {
    AppNavigation,
    AppNavigationDrawer,
  },
};
</script>
