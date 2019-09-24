<template>
  <div class="container d-block">
    <p class="subtitle-1">
      生活タイプについて教えてください<v-icon>mdi-help-circle</v-icon>
    </p>
    <p class="caption">
      ※ご自身の生活タイプにもっとも近いと思う項目を選択してください。
    </p>

    <div class="mb-5">
      <v-slider
        v-model="outRateIndex"
        :max="tickLabels.length - 1"
        :tick-labels="tickLabels"
        class="tickSlider"
        tick-size="6"
      >
      </v-slider>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import MasterDao from '../libs/dao/MasterDao'
import { appendixStateModule } from '~/store/modules/appendix'

@Component
export default class SimOutRateType extends Vue {
  private outRate: number = appendixStateModule.outRate
  get tickLabels() {
    const list = MasterDao.outRateTypeList()
    const nameList = []
    for (const obj of list) {
      nameList.push(obj.name)
    }
    return nameList
  }
  get outRateIndex() {
    const list = MasterDao.outRateTypeList()
    let idx = 0
    for (const obj of list) {
      if (obj.rate >= appendixStateModule.outRate) {
        return idx
      }
      idx++
    }
    return idx - 1
  }
  set outRateIndex(idx) {
    const list = MasterDao.outRateTypeList()
    appendixStateModule.setOutRate(list[idx].rate)
  }
}
</script>

<style scoped lang="scss">
.tickSlider {
  font-size: 9px;
}
</style>
