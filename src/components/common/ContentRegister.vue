<template>
  <v-container>
    <v-row justify="center">
      <v-card class="mt-8" height="800" width="800">
        <v-card-text>
          <slot />

          <v-card-actions class="justify-center">
            <div class="ma-3" style="position: absolute; bottom: 0">
              <v-btn color="error" class="mr-4"> </v-btn>

              <v-btn class="white--text" color="blue lighten-1"> </v-btn>
            </div>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: `ContentRegister`,
};
</script>
