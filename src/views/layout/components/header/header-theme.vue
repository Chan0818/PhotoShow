<template>
  <m-popover>
    <template #reference>
      <m-svg-icon
      :name="svgIconName"
      class="p-1 w-4 h-4 rounded-sm cursor-pointer outline-none
      hover:bg-zinc-100/60 dark:hover:bg-zinc-900 guide-theme"
      fillClass="fill-zinc-900 dark:fill-zinc-300">
      </m-svg-icon>
    </template>
    <div class="overflow-hidden w-[140px]">
      <div
      @click="onItemClick(item)"
      :key="item.id"
      v-for="item in themeArr"
      class="flex items-center p-1 rounded cursor-pointer hover:bg-zinc-100/60 dark:hover:bg-zinc-800">
        <m-svg-icon
        :name="item.icon"
        class="mr-1 w-1.5 h-1.5"
        fillClass="fill-zinc-900 dark:fill-zinc-300"
        ></m-svg-icon>
        <span class="text-sm text-zinc-800 dark:text-zinc-300">{{ item.name }}</span>
      </div>
    </div>
  </m-popover>
</template>

<script setup>

import { THEME_DARK, THEME_LIGHT, THEME_SYSTEM } from '@/constants'
import { computed } from 'vue';
import { useStore } from 'vuex';

// 构建渲染数据源
const themeArr = [
  {
    id: '0',
    type: THEME_LIGHT,
    icon: 'theme-light',
    name: '极简白'
  },
  {
    id: '1',
    type: THEME_DARK,
    icon: 'theme-dark',
    name: '极夜黑'
  },
  {
    id: '2',
    type: THEME_SYSTEM,
    icon: 'theme-system',
    name: '跟随系统'
  }
]
const store = useStore()
/**
 * 切换主题
 */
const onItemClick = (theme)=>{
  store.commit('theme/changeThemeType',theme.type)
}
//控制图标展示
const svgIconName = computed(()=>{
  const findTheme =themeArr.find((theme)=>{
  return theme.type === store.getters.themeType
})
  return findTheme.icon
})

</script>
<style scoped lang='scss'>
</style>