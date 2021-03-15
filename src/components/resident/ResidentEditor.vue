<template>
  <div>
    <v-text-field v-model="name" label="利用者名"></v-text-field>

    <v-text-field v-model="birthday" label="生年月日"></v-text-field>

    <v-select v-model="gender" :items="genderItems" label="性別"></v-select>

    <v-text-field v-model="height" label="身長"></v-text-field>

    <v-text-field v-model="weight" label="体重"></v-text-field>

    <v-textarea v-model="allergies" no-resize rows="3" label="アレルギー"></v-textarea>

    <v-textarea v-model="medicalHistory" no-resize rows="3" label="病歴"></v-textarea>

    <v-textarea v-model="preference" no-resize rows="3" label="趣味嗜好"></v-textarea>

    <v-textarea v-model="lifeHistory" no-resize rows="3" label="生活歴"></v-textarea>

    <v-textarea v-model="remarks" no-resize rows="3" label="備考"></v-textarea>
  </div>
</template>

<script>
import { mapState, mapAction } from 'vuex';

export default {
  name: `ResidentEditor`,

  data() {
    return {
      /**
       * セレクトリストの選択肢
       */
      genderItems: ['男', '女'],
    };
  },
  computed: {
    ...mapState('/resident/residentEditor', ['editingData']),
    /**
     * 利用者名
     */
    name: {
      get() {
        return this.editingData.value;
      },
      set(name) {
        this.setName = name;
      },
    },
    /**
     * 生年月日
     */
    birthday: {
      get() {
        return this.value;
      },
      set(value) {
        this.birthday = value;
      },
    },
    /**
     * 性別
     */
    gender: {
      get() {
        return this.value;
      },
      set(value) {
        this.gender = value;
      },
    },
    /**
     * 身長
     */
    height: {
      get() {
        return this.value;
      },
      set(value) {
        this.height = value;
      },
    },
    /**
     * 体重
     */
    weight: {
      get() {
        return this.value;
      },
      set(value) {
        this.weight = value;
      },
    },
    /**
     * アレルギー
     */
    allergies: {
      get() {
        return this.value;
      },
      set(value) {
        this.allergies = value;
      },
    },
    /**
     * 病歴
     */
    medicalHistory: {
      get() {
        return this.value;
      },
      set(value) {
        this.medicalHistory = value;
      },
    },
    /**
     * 趣味嗜好
     */
    preference: {
      get() {
        return this.value;
      },
      set(value) {
        this.preference = value;
      },
    },
    /**
     * 生活歴
     */
    lifeHistory: {
      get() {
        return this.value;
      },
      set(value) {
        this.lifeHistory = value;
      },
    },
    /**
     * 備考
     */
    remarks: {
      get() {
        return this.value;
      },
      set(value) {
        this.remarks = value;
      },
    },
  },

  methods: {
    ...mapAction(),
  },
};
</script>
