<template>
  <div class="resultContainer fill-height pa-2">
    <div class="chartContainer">
      <donut-chart></donut-chart>
    </div>
    <result-text-summary></result-text-summary>

    <v-card>
      <v-card-title
        ><div class="text-center">
          簡単にシミュレーションする
        </div></v-card-title
      >
      <v-card-text>
        <v-tabs
          v-model="selectedTab"
          fixed-tabs
          dark
          background-color="blue-grey darken-4"
        >
          <v-tabs-slider color="blue-grey lighten-5"></v-tabs-slider>
          <v-tab key="0" class="customTab">退職予定</v-tab>
          <v-tab key="1" class="customTab">死亡年齢</v-tab>
          <v-tab key="2" class="customTab">生活タイプ</v-tab>
          <v-tab key="3" class="customTab">金融資産</v-tab>
        </v-tabs>
        <v-tabs-items v-model="selectedTab" touchless>
          <v-tab-item key="0"><sim-retire-age></sim-retire-age></v-tab-item>
          <v-tab-item key="1"><sim-die-age></sim-die-age></v-tab-item>
          <v-tab-item key="2"><sim-out-rate-type></sim-out-rate-type></v-tab-item>
          <v-tab-item key="3"><sim-fortune></sim-fortune></v-tab-item>
        </v-tabs-items>
      </v-card-text>
    </v-card>

    <div class="text-center">
      <p class="mt-8">
        お勤めの「業種」「事業規模」を入力すると<br />
        より正確な就労所得をシミュレーションできます。
      </p>
      <v-btn color="info">詳細情報を入力</v-btn>
      <p class="mt-8">
        「年金情報」「退職金情報」を入力することで、<br />より正確なシミュレーションができます。
      </p>
      <v-row no-gutters>
        <v-col cols="6"
          ><v-btn color="info" class="ma-1">年金情報を入力</v-btn></v-col
        >
        <v-col cols="6"
          ><v-btn color="info" class="ma-1">退職金情報を入力</v-btn></v-col
        >
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    DonutChart: () => import('../components/DonutChart.vue'),
    ResultTextSummary: () => import('../components/ResultTextSummary.vue'),
    SimRetireAge: () => import('../components/SimRetireAge.vue'),
    SimDieAge: () => import('../components/SimDieAge.vue'),
    SimOutRateType: () => import('../components/SimOutRateType.vue'),
    SimFortune: () => import('../components/SimFortune.vue')
  }
})
export default class ResultPage extends Vue {
  selectedTab = 0
  isDonutChart = false
}
</script>

<style scoped>
.resultContainer {
  overflow: hidden auto;
  width: 100%;
  margin: 0;
  font-size: 14px;
}
.chartContainer {
  background: #ffffff;
}
.customTab {
  max-width: 280px;
}
</style>
