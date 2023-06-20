<template>
  <mobile-navigation-vue v-if="isMobileTerminal" ></mobile-navigation-vue>
  <pc-navigation-vue v-else></pc-navigation-vue>
  <!-- <div>控制移动端或者pc端显示</div> -->
</template>

<script setup>
import mobileNavigationVue from './mobile/index.vue'
import pcNavigationVue from './pc/index.vue'
import {isMobileTerminal} from '@/utils/flexible'
import { useStore } from 'vuex'

const store = useStore()
//触发category获取数据
store.dispatch('category/useCategoryData')

</script>
<style scoped lang='scss'>
</style>