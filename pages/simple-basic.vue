<template>
  <div class="resultContainer fill-height pa-2">
    <p class="text-center">
      将来必要になる資産をシミュレーションするため、<br />
      あなたやご家族のことを教えてください。<br />
      入力情報から必要資産を、<br />
      統計データを用いて自動計算します。
    </p>

    <basic-inputs></basic-inputs>
    <div class="mt-5 pr-10 pl-10">
      <v-btn color="primary" block to="/result" nuxt>
        結果を見る
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    BasicInputs: () => import('../components/BasicInputs.vue')
  }
})
export default class SimpleBasicPage extends Vue {
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
