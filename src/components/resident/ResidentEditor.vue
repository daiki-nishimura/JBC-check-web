<template>
  <ContentOption>
    <v-text-field v-model="name" label="利用者名"></v-text-field>

    <v-text-field v-model="name" label="生年月日"></v-text-field>

    <v-select v-model="gender" :items="genderItems" label="性別"></v-select>

    <v-text-field v-model="name" label="身長"></v-text-field>

    <v-text-field v-model="name" label="体重"></v-text-field>

    <v-text-field v-model="name" label="アレルギー"></v-text-field>

    <v-text-field v-model="name" label="病歴"></v-text-field>

    <v-text-field v-model="name" label="趣味嗜好"></v-text-field>

    <v-text-field v-model="name" label="生活歴"></v-text-field>

    <v-text-field v-model="name" label="備考"></v-text-field>

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
      name: '',
      gender: '',
    };
  },
  computed: {
    value: {
      get() {
        return this.value;
      },
      set(value) {
        this.name = value;
        this.gender = value;
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
