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
    </v-data-table>
  </v-container>
</template>

<script>
import residentDataTableheadars from '@/common/constants/residentDataTableheadars';
import residentDataTableitems from '@/common/constants/residentDataTableitems';

export default {
  name: 'ResidentDataTable',
  selected: [],
  data() {
    return {
      headers: residentDataTableheadars.headers,
      items: residentDataTableitems.items,
    };
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
          font-size: 18px !important;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
