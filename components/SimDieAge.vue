<template>
  <div class="container d-block">
    <p class="subtitle-1">
      死亡予定年齢を入力してください<v-icon>mdi-help-circle</v-icon>
    </p>
    <p class="caption">
      ※ここで入力した年齢情報をもとに、支出総額が変更されます
    </p>

    <v-row>
      <v-col cols="3" offset="9">
        <v-text-field
          v-model="dieAge"
          class="mt-0 pt-0"
          hide-details
          outlined
          single-line
          type="number"
          suffix="才"
          @change="onChangeDieAge"
        ></v-text-field>
      </v-col>
    </v-row>
    <div>
      <v-slider v-model="dieAge" min="60" max="120" @change="onChangeDieAge">
      </v-slider>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { appendixStateModule } from '~/store/modules/appendix'

@Component
export default class SimDieAge extends Vue {
  private dieAge: number = appendixStateModule.dieAge
  onChangeDieAge(arg) {
    appendixStateModule.setDieAge(arg)
  }
}
</script>

<style scoped lang="scss"></style>
