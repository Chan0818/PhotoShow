<template>
    <div class="relative p-0.5 rounded-xl border-white duration-500 
    group hover:bg-red-100">
      <div >
          <!-- 搜索图标 -->
          <m-svg-icon class="absolute left-2 w-1.5 h-1.5
          top-[50%] translate-y-[-50%]"
          name="search" color="#707070"></m-svg-icon>
          <!-- 输入框 -->
          <input type="text"
          class="block w-full h-[44px] pl-4 outline-0 rounded-xl
          text-sm text-zinc-900 bg-zinc-100 caret-zinc-400
          duration-500 group-hover:bg-white group-hover:border-zinc-200
          focus:border-red-300 tracking-wide"
          placeholder="搜索"
          >
          <!-- 删除按钮 -->
          <m-svg-icon
          class="absolute right-9 w-1.5 h-1.5 cursor-pointer
          top-[50%] translate-y-[-50%] duration-300"
          name="input-delete"
          ></m-svg-icon>
          <!-- 分割线 -->
          <div class="absolute right-[62px] w-[1px] h-1.5 top-[50%]
          translate-y-[-50%] duration-500 bg-zinc-200 opacity-0 group-hover:opacity-100"></div>
          <!-- TODO:搜索按钮:通用组件 -->
  
      </div>
      <!-- 下拉区 -->
      <Transition name="slide">
          <div class="absolute left-0 top-[56px] w-full max-h-[368px] border-zinc-200
          rounded p-2 overflow-auto text-base bg-white duration-200 hover:shadow-2xl z-20">
              <slot name="dropdown" />
          </div>
      </Transition>
    </div>
  </template>
  
  <script setup>
  </script>
  <style scoped lang='scss'>
  
  .slide-enter-active {
    transition: all 0.5s;
  }
  
  .slide-leave-active {
    transition: all 0.5s;
  }
  
  .slide-enter-from,
  .slide-leave-to {
    transform: translateY(40px);
    opacity: 0;
  }
  
  </style>