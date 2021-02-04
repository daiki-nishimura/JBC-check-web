<template>
  <v-app-bar app color="#3DA9FC">
    <!-- クラスの名前をいい感じにしてください -->
    <div class="title">
      <span class="titleName">JBC-check</span>
    </div>
    <div>
      <v-text-field
        v-model="keyword"
        class="search-box"
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
      keyword: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.search-box {
  width: 640px;
}
.title {
  padding-left: 45px;
  padding-right: 47x;

  .titleName {
    font-size: 24px;
    color: #ffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
}
</style>
