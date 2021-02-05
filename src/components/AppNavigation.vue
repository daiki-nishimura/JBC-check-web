<template>
  <v-app-bar app color="#3DA9FC">
    <div>
      <span class="title white--text headline pa-12">JBC-check</span>
    </div>
    <div>
      <v-text-field
        v-model="keyword"
        class="search-text-field"
        solo
        dense
        placeholder="利用者の検索"
        append-icon="mdi-menu-down"
        hide-details="auto"
      ></v-text-field>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppNavigation',
  data() {
    return {
      keyWord: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.search-text-field {
  width: 640px;
}

.title {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
