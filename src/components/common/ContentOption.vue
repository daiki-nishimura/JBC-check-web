<template>
  <v-container>
    <!-- 画面サイズを利用者一覧画面と同じようにしようとするとheightの値が大きくなります -->
    <v-card height="880">
      <v-card-text>
        <slot />

        <v-card-actions class="justify-center"> </v-card-actions>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: `ContentOption`,
};
</script>
