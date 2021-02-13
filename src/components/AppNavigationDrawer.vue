<template>
  <v-navigation-drawer
    width="228px"
    color="blue-grey darken-2"
    app
    :mini-variant.sync="mini"
    clipped
  >
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon color="white">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="white--text" v-text="item.title" />
        </v-list-item-content>

        <v-btn v-if="!index" icon @click.stop="isMini">
          <v-icon color="white">mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import NAVIGATION_DRAWER from '@/common/constants/navigationDrawerItems';

export default {
  name: 'AppNavigationDrawer',
  data() {
    return {
      items: NAVIGATION_DRAWER.ITEMS,
      mini: false,
    };
  },

  methods: {
    isMini() {
      this.mini = !this.mini;
    },
  },
};
</script>
