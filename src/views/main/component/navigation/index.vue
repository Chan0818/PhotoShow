<template>
  <mobile-navigation-vue v-if="isMobileTerminal" :data="categoryDate"></mobile-navigation-vue>
  <pc-navigation-vue v-else></pc-navigation-vue>
  <!-- <div>控制移动端或者pc端显示</div> -->
</template>

<script setup>
import { ref } from 'vue'
import mobileNavigationVue from './mobile/index.vue'
import pcNavigationVue from './pc/index.vue'
import {isMobileTerminal} from '@/utils/flexible'
import { getCategory } from '@/api/category'
import { ALL_CATEGORY_ITEM } from '@/constants'

const categoryDate = ref([])
const getCategoryData = async ()=>{
  const {categorys} = await getCategory()
  categorys.unshift(ALL_CATEGORY_ITEM)
  categoryDate.value = categorys

}
getCategoryData()
</script>
<style scoped lang='scss'>
</style>