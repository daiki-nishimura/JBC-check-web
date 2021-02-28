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

        { text: '生年月日', value: 'birthday' },
        { text: '性別', value: 'sex' },
        { text: '身長', value: 'height' },
        { text: '体重', value: 'weight' },
        { text: 'アレルギー', value: 'allergies' },
        { text: '病歴', value: 'medicalHistory' },
        { text: '趣味趣向', value: 'hobby' },
        { text: '生活歴', value: 'lifeHistory' },
        { text: '備考', value: 'remarks' },
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
