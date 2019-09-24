<template>
  <div class="pa-3">
    <div v-if="lessTotal > 0">
      <v-expansion-panels>
        <v-expansion-panel class="text-center">
          <v-expansion-panel-header>
            <div class="text-center">
              生涯支出に対し
              <span class="red--text title">{{ lessTotal }}万円</span>
              足りません
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              これから毎月
              <span class="red--text title">+{{ lessMontyly }}万円</span><br />
              の収入で賄うことが可能です。
            </p>
            <p>
              足りない収入を補填するためできることは？<br />動画でわかりやすくお届けします。
            </p>
            <div class="dummyMovie">
              <v-icon color="white" x-large>mdi-play-circle-outline</v-icon>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <v-alert v-else type="success"
      >生涯支出に対し十分な準備ができています</v-alert
    >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
import CalculateDao from '../libs/dao/CalculateDao'
import { appendixStateModule } from '~/store/modules/appendix'

@Component
export default class ResultTextSummary extends Vue {
  lessTotal = 0
  lessMontyly = 0
  get appendixValuesForWait() {
    return appendixStateModule.valuesForWait
  }
  @Watch('appendixValuesForWait')
  onAppendixChanged(newVal: any, oldVal: any) {
    this.drawBalance()
  }
  drawBalance() {
    const balance = CalculateDao.getBalance()
    this.lessTotal = -balance.profit
    this.lessMontyly = balance.recoverLessMonthlyIncome
  }

  mounted() {
    this.drawBalance()
  }
}
</script>
<style scoped lang="scss">
.dummyMovie {
  background-color: #777777;
  color: #ffffff;
  margin: 5px 20px;
  padding: 80px 0;
}
</style>
