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
import { mapState, mapActions } from 'vuex';

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
    ...mapState('residentEditor', ['editingData']),
    /**
     * 利用者名
     */
    name: {
      get() {
        return this.editingData;
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
        return this.editingData;
      },
      set(birthday) {
        this.setBirthday = birthday;
      },
    },
    /**
     * 性別
     */
    gender: {
      get() {
        return this.editingData;
      },
      set(gender) {
        this.setGender = gender;
      },
    },
    /**
     * 身長
     */
    height: {
      get() {
        return this.editingData;
      },
      set(height) {
        this.setHeight = height;
      },
    },
    /**
     * 体重
     */
    weight: {
      get() {
        return this.editingData;
      },
      set(weight) {
        this.setWeight = weight;
      },
    },
    /**
     * アレルギー
     */
    allergies: {
      get() {
        return this.editingData;
      },
      set(allergies) {
        this.setAllergies = allergies;
      },
    },
    /**
     * 病歴
     */
    medicalHistory: {
      get() {
        return this.editingData;
      },
      set(medicalHistory) {
        this.setMedicalHistory = medicalHistory;
      },
    },
    /**
     * 趣味嗜好
     */
    preference: {
      get() {
        return this.editingData;
      },
      set(preference) {
        this.setPreference = preference;
      },
    },
    /**
     * 生活歴
     */
    lifeHistory: {
      get() {
        return this.editingData;
      },
      set(lifeHistory) {
        this.setLifeHistory = lifeHistory;
      },
    },
    /**
     * 備考
     */
    remarks: {
      get() {
        return this.editingData;
      },
      set(remarks) {
        this.setRemarks = remarks;
      },
    },
  },

  methods: {
    ...mapActions('/resident/residentEditor', [
      'setName',
      'setBirthday',
      'setGender',
      'setHeight',
      'setWeight',
      'setAllergies',
      'setMedicalHistory',
      'setPreference',
      'setLifeHistory',
      'setRemarks',
    ]),
  },
};
</script>
