<template>
  <div class="content-editor-buttons">
    <slot />
  </div>
</template>

<style lang="scss">
.content-editor-buttons {
  .v-btn {
    width: 160px;

    &:not(:last-child) {
      margin-right: 8px;
    }
  }
}
</style>
