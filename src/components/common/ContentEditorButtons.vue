<template>
  <div class="content-editor-buttons">
    <slot />
  </div>
</template>

<style lang="scss">
.content-editor-buttons {
  .v-btn {
    width: 160px;
  }
  // +を記述した場合キャンセル側のmargin指定がききませんでしたので、.v-btn.v-btnという形にすると両方のボタンにmargin指定がききました
  // レビュー後コメント消します
  .v-btn.v-btn {
    margin-right: 8px;
    margin-left: 8px;
  }
}
</style>
