<template>
  <div>
    <ErrorMessages />

    <v-text-field v-model="name" label="利用者名"></v-text-field>
    <p v-if="hasErrorWithName">
      <span v-for="n in errors.get('name')" :key="n" class="red--text">{{ n }}</span>
    </p>

    <v-text-field v-model="birthday" label="生年月日"></v-text-field>
    <p v-if="hasErrorWithBirthday">
      <span v-for="b in errors.get('birthday')" :key="b" class="red--text">{{ b }}</span>
    </p>

    <v-select v-model="gender" :items="genderItems" label="性別"></v-select>
    <p v-if="hasErrorWithGender">
      <span v-for="g in errors.get('gender')" :key="g" class="red--text">{{ g }}</span>
    </p>

    <v-text-field v-model="height" label="身長"></v-text-field>
    <p v-if="hasErrorWithHeight">
      <span v-for="h in errors.get('height')" :key="h" class="red--text">{{ h }}</span>
    </p>

    <v-text-field v-model="weight" label="体重"></v-text-field>
    <p v-if="hasErrorWithWeight">
      <span v-for="w in errors.get('weight')" :key="w" class="red--text">{{ w }}</span>
    </p>

    <v-textarea v-model="allergies" no-resize rows="3" label="アレルギー"></v-textarea>

    <v-textarea v-model="medicalHistory" no-resize rows="3" label="病歴"></v-textarea>

    <v-textarea v-model="preference" no-resize rows="3" label="趣味嗜好"></v-textarea>

    <v-textarea v-model="lifeHistory" no-resize rows="3" label="生活歴"></v-textarea>

    <v-textarea v-model="remarks" no-resize rows="3" label="備考"></v-textarea>
  </div>
</template>

<script>
import ErrorMessages from '@/components/common/ErrorMessages.vue';
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: `ResidentEditor`,
  components: {
    ErrorMessages,
  },
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
    ...mapGetters('residentEditor', ['errors']),
    /**
     * 利用者名
     */
    name: {
      get() {
        return this.editingData.name;
      },
      set(name) {
        this.setName({ name });
      },
    },
    /**
     * 生年月日
     */
    birthday: {
      get() {
        return this.editingData.birthday;
      },
      set(birthday) {
        this.setBirthday({ birthday });
      },
    },
    /**
     * 性別
     */
    gender: {
      get() {
        return this.editingData.gender;
      },
      set(gender) {
        this.setGender({ gender });
      },
    },
    /**
     * 身長
     */
    height: {
      get() {
        return this.editingData.height;
      },
      set(height) {
        this.setHeight({ height });
      },
    },
    /**
     * 体重
     */
    weight: {
      get() {
        return this.editingData.weight;
      },
      set(weight) {
        this.setWeight({ weight });
      },
    },
    /**
     * アレルギー
     */
    allergies: {
      get() {
        return this.editingData.allergies;
      },
      set(allergies) {
        this.setAllergies({ allergies });
      },
    },
    /**
     * 病歴
     */
    medicalHistory: {
      get() {
        return this.editingData.medicalHistory;
      },
      set(medicalHistory) {
        this.setMedicalHistory({ medicalHistory });
      },
    },
    /**
     * 趣味嗜好
     */
    preference: {
      get() {
        return this.editingData.preference;
      },
      set(preference) {
        this.setPreference({ preference });
      },
    },
    /**
     * 生活歴
     */
    lifeHistory: {
      get() {
        return this.editingData.lifeHistory;
      },
      set(lifeHistory) {
        this.setLifeHistory({ lifeHistory });
      },
    },
    /**
     * 備考
     */
    remarks: {
      get() {
        return this.editingData.remarks;
      },
      set(remarks) {
        this.setRemarks({ remarks });
      },
    },
  },
  methods: {
    ...mapActions('residentEditor', [
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
