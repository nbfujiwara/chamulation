<template>
  <div class="container d-block">
    <p class="subtitle-1">
      65歳時点での金融資産を教えてください<v-icon>mdi-help-circle</v-icon>
    </p>
    <p class="caption">
      ※株などの金融資産も含め、入力してください。わからない場合は想定でも構いません。
    </p>

    <v-row>
      <v-col cols="4" offset="8">
        <v-text-field
          v-model="fortune"
          class="mt-0 pt-0"
          hide-details
          outlined
          single-line
          type="number"
          suffix="万円"
          @change="onChangeFortune"
        ></v-text-field>
      </v-col>
    </v-row>
    <div>
      <v-slider v-model="fortune" min="0" max="10000" @change="onChangeFortune">
      </v-slider>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { appendixStateModule } from '~/store/modules/appendix'

@Component
export default class SimFortune extends Vue {
  private fortune: number = appendixStateModule.fortune
  onChangeFortune(arg) {
    appendixStateModule.setFortune(arg)
  }
}
</script>

<style scoped lang="scss"></style>
