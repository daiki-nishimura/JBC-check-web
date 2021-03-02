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
  name: 'ContentDataTable',
  props: {
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.data-table {
  &.v-data-table {
    thead {
      tr {
        height: 88px;
        th {
          font-size: 18px !important;
          background: #42a5f5;
          white-space: nowrap;
        }
      }
    }
    tbody {
      tr {
        height: 68px;
        td {
          font-size: 16px !important;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 120px;
        }
      }
    }
  }
}
</style>
