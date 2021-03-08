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
      <ResidentRegisterAction />
    </v-row>
  </ContentOption>
</template>

<script>
import ContentOption from '@/components/common/ContentOption.vue';
import ResidentRegisterAction from '@/components/resident/ResidentRegisterAction.vue';

export default {
  name: `ResidentRegisterView`,

  components: {
    ContentOption,
    ResidentRegisterAction,
  },

  data() {
    return {
      genderItems: ['男', '女'],
    };
  },
};
</script>
