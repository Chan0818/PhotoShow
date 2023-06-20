<template>
  <div class="flex flex-col h-[80vh] py-2">
    <h2 class="px-1 mb-2 text-xl text-zinc-900 font-bold first-letter 
    dark:text-zinc-200">所有分类</h2>
    <ul class="overflow-y-scroll">
        <li
        v-for="(item,index) in categorys"
        @click="$emit('onItemClick',index)"
        :key="item.id"
        class="px-1 py-1.5 text-lg text-zinc-900 active:bg-zinc-100
            duration-100 dark:text-zinc-300 active:dark:bg-zinc-900"
        >{{ item.name }}</li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
    categorys:{
        type:Array,
        required:true
    }
})

</script>
<style scoped lang='scss'>
</style>