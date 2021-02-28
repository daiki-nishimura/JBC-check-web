<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="items"
      item-key="name"
      show-select
      class="elevation-1 data-table"
      height="768"
    >
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: 'ResidentDataTable',
  data() {
    return {
      selected: [],
      headers: [
        {
          text: '利用者名',
          align: 'start',
          sortable: false,
          value: 'name',
        },

        { text: '生年月日', value: '生年月日', width: '' },
        { text: '性別', value: '性別' },
        { text: '身長', value: '身長' },
        { text: '体重', value: '体重' },
        { text: 'アレルギー', value: 'アレルギー' },
        { text: '病歴', value: '病歴' },
        { text: '趣味趣向', value: '趣味趣向' },
        { text: '生活歴', value: '生活歴' },
        { text: '備考', value: '備考' },
      ],
      items: [
        {
          name: '西村だいき',
          生年月日: '',
          性別: '',
          身長: 'cm',
          体重: 'kg',
          アレルギー: '',
          病歴: '',
          趣味趣向: '',
          生活歴: '',
          備考: 'こんにちは',
        },
        {
          name: '',
          生年月日: '',
          性別: '',
          身長: 'cm',
          体重: 'kg',
          アレルギー: '',
          病歴: '',
          趣味趣向: '',
          生活歴: '',
          備考: '',
        },
        {
          name: ' ',
          生年月日: '',
          性別: '',
          身長: 'cm',
          体重: 'kg',
          アレルギー: '',
          病歴: '',
          趣味趣向: '',
          生活歴: '',
          備考: '',
        },
        {
          name: ' ',
          生年月日: '',
          性別: '',
          身長: 'cm',
          体重: 'kg',
          アレルギー: '',
          病歴: '',
          趣味趣向: '',
          生活歴: '',
          備考: '',
        },
        {
          name: ' ',
          生年月日: '',
          性別: '',
          身長: 'cm',
          体重: 'kg',
          アレルギー: '',
          病歴: '',
          趣味趣向: '',
          生活歴: '',
          備考: '',
        },
        {
          name: ' ',
          生年月日: '',
          性別: '',
          身長: 'cm',
          体重: 'kg',
          アレルギー: '',
          病歴: '',
          趣味趣向: '',
          生活歴: '',
          備考: '',
        },
        {
          name: ' ',
          生年月日: '',
          性別: '',
          身長: 'cm',
          体重: 'kg',
          アレルギー: '',
          病歴: '',
          趣味趣向: '',
          生活歴: '',
          備考: '',
        },
        {
          name: ' ',
          生年月日: '',
          性別: '',
          身長: 'cm',
          体重: 'kg',
          アレルギー: '',
          病歴: '',
          趣味趣向: '',
          生活歴: '',
          備考: '',
        },
        {
          name: ' ',
          生年月日: '',
          性別: '',
          身長: 'cm',
          体重: 'kg',
          アレルギー: '',
          病歴: '',
          趣味趣向: '',
          生活歴: '',
          備考: '',
        },
        {
          name: ' ',
          生年月日: '',
          性別: '',
          身長: 'cm',
          体重: 'kg',
          アレルギー: '',
          病歴: '',
          趣味趣向: '',
          生活歴: '',
          備考: '',
        },
      ],
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
        }
      }
    }
  }
}
tbody {
  tr {
    height: 68px;
    td {
      font-size: 18px !important;
    }
  }
}
</style>
