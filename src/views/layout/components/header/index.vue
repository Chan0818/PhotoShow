<template>
  <div class="w-full px-2 py-1 border-b border-b-zinc-200
  bg-white dark:bg-zinc-800  dark:border-b-zinc-700">
    <div class="flex items-center">
      <img 
      @click="onToHome"
      class="mr-2 h-4 cursor-pointer guide-home"
      src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png" alt="">
      <header-search-vue class="mr-1 flex-1 guide-search"></header-search-vue>
      <header-theme-vue class="mr-1"></header-theme-vue>
      <header-my-vue></header-my-vue>
    </div>

  </div>
</template>

<script setup>
import headerSearchVue from './header-search/index.vue'
import headerThemeVue from './header-theme.vue'
import headerMyVue from './header-my.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()

const router = useRouter()
const onToHome = ()=>{
  store.commit('app/changeRouterType','push')
  router.push('/')
}

</script>
<style scoped lang='scss'>
</style>