<template>
  <div>
    <ResidentContentHeader />

    <ContentDataTable :headers="headers" :items="items" />
  </div>
</template>

<script>
import HEADERS from '@/common/constants/contentDataTableHeadars';
import ResidentContentHeader from '@/components/resident/ResidentContentHeader.vue';
import ContentDataTable from '@/components/common/ContentDataTable.vue';

export default {
  name: 'ResidentList',

  components: {
    ResidentContentHeader,
    ContentDataTable,
  },

  data() {
    return {
      /**
       * v-data-tableのヘッダーリスト
       */
      headers: HEADERS.RESIDENT,

      /**
       * v-data-tableのアイテムリスト
       */
      items: [
        {
          id: 1,
          name: '西村だいき',
          birthday: '1929/9/9',
          gender: '男',
          height: '160cm',
          weight: '52kg',
          allergies: '乳製品',
          medicalHistory: '過去に大腿骨骨折あり',
          preference: '筋トレが好き。鳥胸肉が好き。',
          lifeHistory: '昭和4年３人兄弟の長男として誕生',
          remarks: '友人と話すのが好きで良く集会にでていた。',
        },
        {
          id: 2,
          name: '西村アンドレ',
          birthday: '1929/9/9',
          gender: '男',
          height: '170cm',
          weight: '67kg',
          allergies: '卵',
          medicalHistory: '過去に骨折あり',
          preference: '筋トレが好き。ササミが好き。',
          lifeHistory: '昭和4年5人兄弟の長男として誕生',
          remarks: 'よくジムにいっていた',
        },
        {
          id: 3,
          name: '西村善造',
          birthday: '1929/9/9',
          gender: '男',
          height: '150cm',
          weight: '44kg',
          allergies: '無し',
          medicalHistory: '過去に脳梗塞あり、右半身麻痺',
          preference: '筋トレが好き。鳥モモ肉が好き。',
          lifeHistory: '昭和4年　長男（一人っ子）として誕生',
          remarks: '散歩が好き。',
        },
        {
          id: 4,
          name: '西村とめ',
          birthday: '1939/3/8',
          gender: '女',
          height: '140cm',
          weight: '38kg',
          allergies: '無し',
          medicalHistory: 'アルツハイマー型認知症',
          preference: '腕立てが好き。鳥胸肉が好き。',
          lifeHistory: '昭和14年３人兄弟の長女として誕生',
          remarks: '婦人会によくでていた。',
        },
        {
          id: 5,
          name: '西村いく',
          birthday: '1930/9/9',
          gender: '女',
          height: '130cm',
          weight: '32kg',
          allergies: '無し',
          medicalHistory: 'レビー小体型認知症',
          preference: 'スクワットが好き。鳥胸肉が好き。',
          lifeHistory: '昭和5年３人姉妹の次女として誕生',
          remarks: 'ドライブに良く出かけていた',
        },
        {
          id: 6,
          name: '西村次郎',
          birthday: '1929/9/9',
          gender: '男',
          height: '180cm',
          weight: '70kg',
          allergies: '無し',
          medicalHistory: 'アルツハイマー型認知症',
          preference: '筋トレが好き。鳥肉が好き。',
          lifeHistory: '昭和4年３人兄弟の次男として誕生',
          remarks: '日課の筋トレは欠かさない',
        },
        {
          id: 7,
          name: '西村三郎',
          birthday: '1929/9/9',
          gender: '男',
          height: '139cm',
          weight: '41kg',
          allergies: '無し',
          medicalHistory: '過去に左大腿骨骨折あり',
          preference: '筋トレが好き。セセリが好き。',
          lifeHistory: '昭和4年３人兄弟の三男として誕生',
          remarks: '家族の心配をよくしていた',
        },
        {
          id: 8,
          name: '西村ともきち',
          birthday: '1929/9/9',
          gender: '男',
          height: '170cm',
          weight: '55kg',
          allergies: '桃',
          medicalHistory: '過去に右肩亜脱臼あり',
          preference: '筋トレが好き。鳥レバーが好き。',
          lifeHistory: '昭和4年３人兄弟の長男として誕生',
          remarks: 'よく昼寝をしていた',
        },
        {
          id: 9,
          name: '西村しんじ',
          birthday: '1929/9/9',
          gender: '男',
          height: '170cm',
          weight: '53kg',
          allergies: 'なし',
          medicalHistory: 'アルツハイマー型認知症',
          preference: '筋トレが好き。ブロッコリーが好き。',
          lifeHistory: '昭和4年2人兄弟の長男として誕生',
          remarks: 'ピアノをよく弾いていた',
        },
        {
          id: 10,
          name: '西村だいき',
          birthday: '1929/9/9',
          gender: '男',
          height: '172cm',
          weight: '55kg',
          allergies: '無し',
          medicalHistory: '過去に大腿骨骨折あり',
          preference: '筋トレが好き。鳥胸肉が好き。',
          lifeHistory: '昭和4年4人兄弟の長男として誕生',
          remarks: '米農家を骨折するまで続けていた',
        },
      ],
    };
  },
};
</script>
