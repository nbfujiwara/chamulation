<template>
  <div class="container d-block">
    <p class="subtitle-1">
      退職年齢を教えて下さい<v-icon>mdi-help-circle</v-icon>
    </p>
    <p class="caption">※65歳前後に退職する場合は、変更してください。</p>

    <v-row>
      <v-col cols="3" offset="9">
        <v-text-field
          v-model="retireAge"
          class="mt-0 pt-0"
          hide-details
          outlined
          single-line
          type="number"
          suffix="才"
          @change="onChangeRetireAge"
        ></v-text-field>
      </v-col>
    </v-row>
    <div>
      <v-slider
        v-model="retireAge"
        min="50"
        max="80"
        @change="onChangeRetireAge"
      >
      </v-slider>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { appendixStateModule } from '~/store/modules/appendix'

@Component
export default class SimRetireAge extends Vue {
  private retireAge: number = appendixStateModule.retireAge
  onChangeRetireAge(arg) {
    appendixStateModule.setRetireAge(arg)
  }
}
</script>

<style scoped lang="scss"></style>
