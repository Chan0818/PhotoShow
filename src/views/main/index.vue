<template>
  <div class="h-full overflow-auto bg-white dark:bg-zinc-800 duration-500">
    <navigation-vue></navigation-vue>
    <div class="max-w-screen-xl mx-auto relative m-1 xl:mt-4">
      <list-vue></list-vue>
    </div>
  </div>
  <!-- <div>我是main下的布局</div> -->
</template>

<script setup>
import navigationVue from './component/navigation/index.vue'
import listVue from './component/list/index.vue'
</script>
<style scoped lang='scss'>
</style>