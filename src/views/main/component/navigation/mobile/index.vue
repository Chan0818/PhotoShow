<template>
  <div class="bg-white sticky top-0 left-0 z-10 dark:bg-zinc-900">
    <ul class="relative flex overflow-x-auto 
        p-1 text-xs text-zinc-600 overflow-hidden dark:text-zinc-300"
        ref="ulTarget">
      <!-- siler处理 -->
      <li ref="sliderTarget"
          class="absolute bg-zinc-900 rounded-lg duration-200 h-[22px] dark:bg-zinc-800"
          :style="sliderStyle"></li>
      <!-- 汉堡按钮 -->
      <li
        class="z-20 bg-white fixed top-0 right-[-1px] 
         h-4 px-1 flex items-center shadow-l-white
         dark:bg-zinc-900 dark:shadow-l-zinc"
         @click="isOpenPopup = !isOpenPopup"
      ><m-svg-icon class="w-1.5 h-1.5" name="hamburger"></m-svg-icon></li>
      <!-- categoryitem -->
      <li v-for="(item,index) in $store.getters.categorys" :key="item.id"
          :ref="setItemRef"
          @click="onItemClick(item)"
          :class="{ 'text-zinc-200': $store.getters.currentCategoryIndex === index}"
          class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4">
          {{ item.name }}
      </li>
      <m-popup v-model="isOpenPopup">
        <menu-vue  @onItemClick="onItemClick"></menu-vue>
      </m-popup>
    </ul>
  </div>
</template>

<script setup>
import menuVue from '@/views/main/component/menu/index.vue'
import { ref, watch, onBeforeUpdate } from 'vue'
import { useScroll } from '@vueuse/core'
import { useStore } from 'vuex';
const store = useStore()

//滑块处理
  const sliderStyle = ref({
    transform:'translateX(0px)',
    width:'52px'
  })
  //选中的item下标
  // const currentCategoryIndex =ref(0)
  //获取填充的所有item元素
  let itemRefs = []
  const setItemRef = (el) => {
    if(el){
      itemRefs.push(el)
    }
  }
  onBeforeUpdate(()=>{
    itemRefs = []
  })
//获取ul元素,以计算偏移量
const ulTarget = ref(null)
const {x:ulScrollLeft} = useScroll(ulTarget)
watch(()=>store.getters.currentCategoryIndex,(val)=>{
  //获取选中元素的left,width
  const { left,width } = itemRefs[val].getBoundingClientRect()
  //sliderstyle的设置
  sliderStyle.value = {
    //ul+left
    transform:`translateX(${ulScrollLeft.value + left - 10 +'px'})`,
    width:width +'px'
  }
})
//popup展示
const isOpenPopup = ref(false)
/**
 * 获得当前分类的下标
 */
const onItemClick = (item)=>{
  store.commit('app/changeCurrentCategory',item)
  isOpenPopup.value = false
}


</script>
<style scoped lang='scss'>
</style>