<template>
  <ContentOption>
    <v-text-field label="利用者名" required></v-text-field>

    <v-text-field v-model="name" label="生年月日" required></v-text-field>

    <v-select v-model="select" :items="genderItems" label="性別" required></v-select>

    <v-text-field v-model="name" label="身長" required></v-text-field>

    <v-text-field v-model="name" label="体重" required></v-text-field>

    <v-text-field v-model="name" label="アレルギー" required></v-text-field>

    <v-text-field v-model="name" label="病歴" required></v-text-field>

    <v-text-field v-model="name" label="趣味嗜好" required></v-text-field>

    <v-text-field v-model="name" label="生活歴" required></v-text-field>

    <v-text-field v-model="name" label="備考" required></v-text-field>

    <v-row class="mt-14" justify="center">
      <ui-cancel-btn></ui-cancel-btn>

      <ui-register-btn></ui-register-btn>
    </v-row>
  </ContentOption>
</template>

<script>
import ContentOption from '@/components/common/ContentOption.vue';
import UiCancelBtn from '@/components/ui/button/UiCancelBtn.vue';
import UiRegisterBtn from '@/components/ui/button/UiRegisterBtn.vue';

export default {
  name: `ResidentRegisterView`,

  components: {
    ContentOption,
    UiCancelBtn,
    UiRegisterBtn,
  },

  data: () => ({
    genderItems: ['男', '女'],
  }),
};
</script>
