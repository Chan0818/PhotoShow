<template>
  <div>
    <m-search v-model="inputValue" @search="onSearchHandler">
      <template #dropdown>
        <div>
          <!-- 搜索提示 -->
          <hint-vue :searchText="inputValue"
          v-show="inputValue"
          @itemClick="onSearchHandler"
          >
          </hint-vue>
          <!-- 搜索历史 -->
          <history-vue v-show="!inputValue"
          @itemClick="onSearchHandler"
          >
          </history-vue>
          <!-- 热门精选 -->
          <theme-vue v-show="!inputValue"></theme-vue>
        </div>
      </template>
    </m-search>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import hintVue from './hint.vue';
import historyVue from './history.vue';
import themeVue from './theme.vue';
import { useStore } from 'vuex';
const store = useStore()
const inputValue = ref('')
// 搜索的回调事件
const onSearchHandler = (val) => {
  inputValue.value = val
  if(val){
    store.commit('search/addHistory',val)
  }
  //触发searchText的变化
  store.commit('app/changeSearchText',val)
}

</script>
<style scoped lang='scss'>
</style>