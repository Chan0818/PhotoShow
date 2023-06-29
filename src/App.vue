<template>
<div class="h-screen w-screen fixed top-0 left-0">
        <m-transition-router-view
        :routerType="$store.getters.routerType"
        mainComponentName="home"
    ></m-transition-router-view>
</div>
</template>

<script setup>

</script>
<style scoped lang='scss'>
</style>
