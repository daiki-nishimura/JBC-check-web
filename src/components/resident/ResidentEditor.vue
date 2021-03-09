<template>
  <ContentOption>
    <v-text-field v-model="name" label="利用者名"></v-text-field>

    <v-text-field v-model="birthday" label="生年月日"></v-text-field>

    <v-select v-model="gender" :items="genderItems" label="性別"></v-select>

    <v-text-field v-model="height" label="身長"></v-text-field>

    <v-text-field v-model="weight" label="体重"></v-text-field>

    <v-text-field v-model="allergies" label="アレルギー"></v-text-field>

    <v-text-field v-model="medicalHistory" label="病歴"></v-text-field>

    <v-text-field v-model="preference" label="趣味嗜好"></v-text-field>

    <v-text-field v-model="lifeHistory" label="生活歴"></v-text-field>

    <v-text-field v-model="remarks" label="備考"></v-text-field>

    <v-row class="mt-14" justify="center">
      <ResidentRegisterAction />
    </v-row>
  </ContentOption>
</template>

<script>
import ContentOption from '@/components/common/ContentOption.vue';
import ResidentRegisterAction from '@/components/resident/ResidentRegisterAction.vue';

export default {
  name: `ResidentEditor`,

  components: {
    ContentOption,
    ResidentRegisterAction,
  },

  data() {
    return {
      /**
       * セレクトリストの選択肢
       */
      genderItems: ['男', '女'],
      /**
       * 利用者名
       */
      name: '',
      /**
       * 生年月日
       */
      birthday: '',
      /**
       * 性別
       */
      gender: '',
      /**
       * 身長
       */
      height: '',
      /**
       * 体重
       */
      weight: '',
      /**
       * アレルギー
       */
      allergies: '',
      /**
       * 病歴
       */
      medicalHistory: '',
      /**
       * 趣味嗜好
       */
      preference: '',
      /**
       * 生活歴
       */
      lifeHistory: '',
      /**
       * 備考
       */
      remarks: '',
    };
  },
  computed: {
    value: {
      get() {
        return this.value;
      },
      set(value) {
        this.name = value;
        this.birthday = value;
        this.gender = value;
        this.height = value;
        this.weight = value;
        this.allergies = value;
        this.medicalHistory = value;
        this.preference = value;
        this.lifeHistory = value;
        this.remarks = value;
      },
    },
  },
};
</script>

<style lang="scss">
.v-btn {
  width: 160px;
}
</style>
