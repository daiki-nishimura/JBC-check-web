<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="items"
      item-key="id"
      show-select
      class="elevation-1 data-table"
      height="768"
      :footer-props="{
        'items-per-page-text': '表示数',
      }"
    >
      <slot />
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: 'UiContentDataTable',
};
</script>
