<template>
  <div class="sticky top-0 left-0 w-full bg-white z-10 dark:bg-zinc-800">
    <ul 
    class="relative flex flex-wrap justify-center w-[800px] 
    px-[10px] py-1 text-xs text-zinc-600 duration-300 
    overflow-hidden mx-auto"
    :class="isOpenCategoty ? 'h-[206px]': 'h-[56px]'"
    >
      <!-- 下拉箭头 -->
      <div
      class="absolute right-1 bottom-1 z-20 p-1 rounded 
      cursor-pointer duration-200 hover:bg-zinc-200
      dark:hover:bg-zinc-900"
      @click="triggerState"
      >
      <m-svg-icon
          :name="isOpenCategoty ? 'fold':'unfold'"
          class="w-1 h-1"
          fillClass="fill-zinc-900 dark:fill-zinc-300"
      ></m-svg-icon>
    </div>
      <!-- categoryitem -->
      <li v-for="(item,index) in $store.getters.categorys"
      :key="item.id"
      class="shrink-0 mr-1 mb-1 h-4 px-1.5 py-0 z-10 duration-200 last:mr-4
      text-zinc-900 font-bold leading-4 cursor-pointer 
       hover:bg-zinc-200 rounded dark:text-zinc-500 dark:hover:text-zinc-300
       dark:hover:bg-zinc-900"
       @click="onItemClick(item)"
       :class="{'text-zinc-900 bg-zinc-200 dark:text-zinc-300 dark:bg-zinc-900': $store.getters.currentCategoryIndex === index}"
      >{{ item.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
/**
 * 状态切换处理
 */
 const isOpenCategoty = ref(false)
const triggerState = () => {
  isOpenCategoty.value = !isOpenCategoty.value
}
/**
 * 选中状态处理
 */
const onItemClick = (item) => {
  store.commit('app/changeCurrentCategory',item)
}


</script>
<style scoped lang='scss'>
</style>