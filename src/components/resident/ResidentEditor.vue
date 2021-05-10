<template>
  <div>
    <v-text-field v-model="name" label="利用者名"></v-text-field>

    <div v-if="hasErrorWithName" class="red--text">
      <p>
        <span v-for="n in errors.get('name')" :key="n">{{ n }}</span>
      </p>
    </div>

    <v-text-field v-model="birthday" label="生年月日"></v-text-field>
    <div v-if="hasErrorWithBirthday" class="red--text">
      <p>
        <span v-for="b in errors.get('birthday')" :key="b">{{ b }}</span>
      </p>
    </div>

    <v-select v-model="gender" :items="genderItems" label="性別"></v-select>

    <div v-if="hasErrorWithGender" class="red--text">
      <p>
        <span v-for="g in errors.get('gender')" :key="g">{{ g }}</span>
      </p>
    </div>

    <v-text-field v-model="height" label="身長"></v-text-field>

    <div v-if="hasErrorWithHeight" class="red--text">
      <p>
        <span v-for="h in errors.get('height')" :key="h">{{ h }}</span>
      </p>
    </div>

    <v-text-field v-model="weight" label="体重"></v-text-field>

    <div v-if="hasErrorWithWeight" class="red--text">
      <p>
        <span v-for="w in errors.get('weight')" :key="w">{{ w }}</span>
      </p>
    </div>

    <v-textarea v-model="allergies" no-resize rows="3" label="アレルギー"></v-textarea>

    <v-textarea v-model="medicalHistory" no-resize rows="3" label="病歴"></v-textarea>

    <v-textarea v-model="preference" no-resize rows="3" label="趣味嗜好"></v-textarea>

    <v-textarea v-model="lifeHistory" no-resize rows="3" label="生活歴"></v-textarea>

    <v-textarea v-model="remarks" no-resize rows="3" label="備考"></v-textarea>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

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

    /**
     * 名前にエラーがあるか
     * @returns {boolean}
     */
    hasErrorWithName() {
      return this.errors.has('name');
    },

    /**
     * 生年月日にエラーがあるか
     * @returns {boolean}
     */
    hasErrorWithBirthday() {
      return this.errors.has('birthday');
    },

    /**
     * 性別にエラーがあるか
     * @returns {boolean}
     */
    hasErrorWithGender() {
      return this.errors.has('gender');
    },

    /**
     * 身長にエラーがあるか
     * @returns {boolean}
     */
    hasErrorWithHeight() {
      return this.errors.has('height');
    },

    /**
     * 体重にエラーがあるか
     * @returns {boolean}
     */
    hasErrorWithWeight() {
      return this.errors.has('weight');
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
