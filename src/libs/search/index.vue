<template>
  <div
    ref="containerTarget"
    class="relative p-0.5 rounded-xl border-white duration-500 group hover:bg-red-100"
  >
    <div>
      <!-- 搜索图标 -->
      <m-svg-icon
        class="absolute left-2 w-1.5 h-1.5 top-[50%] translate-y-[-50%] "
        name="search"
        color="#707070"
      ></m-svg-icon>
      <!-- 输入框 -->
      <input
        type="text"
        @focus="onFocusHandler"
        @blur="onBlurHandler"
        @keyup.enter="onSearchHandler"
        class="block w-full h-[44px] pl-4 outline-0 rounded-xl text-sm text-zinc-900 bg-zinc-100 caret-zinc-400 duration-500 group-hover:bg-white group-hover:border-zinc-200 focus:border-red-300 tracking-wide dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700"
        placeholder="搜索"
        v-model="inputValue"
      />
      <!-- 删除按钮 -->
      <m-svg-icon
        v-show="inputValue"
        @click="onClearClick"
        class="absolute right-9 w-1.5 h-1.5 cursor-pointer top-[50%] translate-y-[-50%] duration-300"
        name="input-delete"
      ></m-svg-icon>
      <!-- 分割线 -->
      <div
        class="absolute right-[62px] w-[1px] h-1.5 top-[50%] translate-y-[-50%] duration-500 bg-zinc-200 opacity-0 group-hover:opacity-100"
      ></div>
      <!-- TODO:搜索按钮:通用组件 -->
      <m-button
        class="absolute right-1 top-[50%] translate-y-[-50%] rounded-xl opacity-0 group-hover:opacity-100 duration-500"
        icon="search"
        iconColor="#ffffff"
        @click="onSearchHandler"
      ></m-button>
    </div>
    <!-- 下拉区 -->
    <transition name="slide">
      <div
        v-if="$slots.dropdown"
        v-show="isFocus"
        class="absolute left-0 top-[56px] w-full max-h-[368px] border-zinc-200 rounded p-2 overflow-auto text-base bg-white duration-200 hover:shadow-2xl z-20 dark:bg-zinc-800 dark:border-zinc-600 scrollbar-thin scrollbar-thumb-transparent xl:scrollbar-thumb-zinc-200 xl:dark:scrollbar-thumb-zinc-900 scrollbar-track-transparent"
      >
        <slot name="dropdown" />
      </div>
    </transition>
  </div>
</template>
<script>
// 更新事件
const EMIT_UPDATE_MODELVALUE = 'update:modelValue'
// 触发搜索
const EMIT_SEARCH = 'search'
// 删除所有文本事件
const EMIT_CLEAR = 'clear'
// 输入事件
const EMIT_INPUT = 'input'
// 获取焦点事件
const EMIT_FOCUS = 'focus'
// 失去焦点事件
const EMIT_BLUR = 'blur'
</script>
<script setup>
import { useVModel, onClickOutside } from '@vueuse/core'
import { watch, ref } from 'vue'
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

const emits = defineEmits([
  EMIT_UPDATE_MODELVALUE,
  EMIT_SEARCH,
  EMIT_CLEAR,
  EMIT_INPUT,
  EMIT_FOCUS,
  EMIT_BLUR
])

// 输入文本
const inputValue = useVModel(props)

/**
 * 一键清空搜索框
 */
const onClearClick = () => {
  inputValue.value = ''
  emits(EMIT_CLEAR, '')
}
/**
 * 触发搜索
 */
const onSearchHandler = () => {
  emits(EMIT_SEARCH, inputValue.value)
}
/**
 * 监听焦点行为
 */
const isFocus = ref(false)
const onFocusHandler = () => {
  isFocus.value = true
  emits(EMIT_FOCUS)
}
/**
 * 失去焦点事件
 */
const onBlurHandler = () => {
  emits(EMIT_BLUR)
}
/**
 * 监听输入行为
 */
watch(inputValue, (val) => {
  emits(EMIT_INPUT, val)
})
/**
 * 点击区域外隐藏dropdown
 */
const containerTarget = ref(null)
onClickOutside(containerTarget, () => {
  isFocus.value = false
})
</script>
<style scoped lang="scss">
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
