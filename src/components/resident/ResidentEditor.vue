<template>
  <ContentEditor>
    <v-text-field v-model="name" label="利用者名"></v-text-field>

    <v-text-field v-model="birthday" label="生年月日"></v-text-field>

    <v-select v-model="gender" :items="genderItems" label="性別"></v-select>

    <v-text-field v-model="height" label="身長"></v-text-field>

    <v-text-field v-model="weight" label="体重"></v-text-field>

    <v-textarea v-model="allergies" no-resize rows="1" label="アレルギー"></v-textarea>

    <v-textarea v-model="medicalHistory" no-resize rows="1" label="病歴"></v-textarea>

    <v-textarea v-model="preference" no-resize rows="1" label="趣味嗜好"></v-textarea>

    <v-textarea v-model="lifeHistory" no-resize rows="1" label="生活歴"></v-textarea>

    <v-textarea v-model="remarks" no-resize rows="1" label="備考"></v-textarea>

    <v-row class="mt-14" justify="center">
      <ResidentRegisterAction />
    </v-row>
  </ContentEditor>
</template>

<script>
import ContentEditor from '@/components/common/ContentEditor.vue';
import ResidentRegisterAction from '@/components/resident/ResidentRegisterAction.vue';

export default {
  name: `ResidentEditor`,

  components: {
    ContentEditor,
    ResidentRegisterAction,
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
    name: {
      get() {
        return this.value;
      },
      set(value) {
        this.name = value;
      },
    },
    birthday: {
      get() {
        return this.value;
      },
      set(value) {
        this.birthday = value;
      },
    },
    gender: {
      get() {
        return this.value;
      },
      set(value) {
        this.gender = value;
      },
    },
    height: {
      get() {
        return this.value;
      },
      set(value) {
        this.height = value;
      },
    },
    weight: {
      get() {
        return this.value;
      },
      set(value) {
        this.weight = value;
      },
    },
    allergies: {
      get() {
        return this.value;
      },
      set(value) {
        this.allergies = value;
      },
    },
    medicalHistory: {
      get() {
        return this.value;
      },
      set(value) {
        this.medicalHistory = value;
      },
    },
    preference: {
      get() {
        return this.value;
      },
      set(value) {
        this.preference = value;
      },
    },
    lifeHistory: {
      get() {
        return this.value;
      },
      set(value) {
        this.lifeHistory = value;
      },
    },
    remarks: {
      get() {
        return this.value;
      },
      set(value) {
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
