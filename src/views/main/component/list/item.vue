<template>
  <div class="bg-white dark:bg-zinc-900 xl:dark:bg-zinc-800 rounded pb-1">
    <div
      @click="onToPinsClick"
      class="relative w-full rounded cursor-zoom-in group"
    >
      <!-- :src="data.photo" -->
      <img
        v-lazy
        class="w-full rounded bg-transparent"
        :src="data.photo"
        :style="{ height: (width / data.photoWidth) * data.photoHeight + 'px' }"
        ref="imgTarget"
      />
      <!-- 遮罩层 -->
      <div
        class="hidden opacity-0 w-full h-full bg-zinc-900/50 absolute top-0 left-0 rounded duration-300 group-hover:opacity-100 xl:block"
      >
        <m-button class="absolute top-1.5 left-1.5">分享</m-button>
        <m-button
          class="absolute top-1.5 right-1.5"
          type="info"
          icon="heart"
          iconClass="fill-zinc-900 dark:fill-zinc-200"
        />
        <m-button
          class="absolute bottom-1.5 left-1.5 bg-zinc-100/70"
          type="info"
          size="small"
          icon="download"
          iconClass="fill-zinc-900 dark:fill-zinc-200"
          @click="onDownload"
        />
        <m-button
          class="absolute bottom-1.5 right-1.5 bg-zinc-100/70"
          type="info"
          size="small"
          icon="full"
          iconClass="fill-zinc-900 dark:fill-zinc-200"
          @click="onImgFullScreen"
        />
      </div>
    </div>
    <!-- 标题 -->
    <p
      class="text-sm mt-1 font-bold text-zinc-900 dark:text-zinc-300 line-clamp-2 px-1"
      alt
    >
      {{ data.title }}
    </p>
    <!-- 作者 -->
    <div class="flex items-center mt-1 px-1">
      <img class="h-2 w-2 rounded-full" :src="data.avatar" alt="" />
      <span class="text-sm text-zinc-500 ml-1">{{ data.author }}</span>
    </div>
  </div>
</template>

<script setup>
import { randomRGB } from '@/utils/color.js'
import { message } from '@/libs'
import { saveAs } from 'file-saver'
import { useFullscreen, useElementBounding } from '@vueuse/core'
import { ref,computed } from 'vue'
const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  width: {
    type: Number
  }
})
const emits = defineEmits(['click'])
/**
 * 下载点击方法
 */
const onDownload = () => {
  //提示消息
  message('success', '图片开始下载')
  //延迟一段时间执行,可以得到更好的体验
  setTimeout(() => {
    /**
     * 下载图片的链接
     */
    console.log(props.data.photoDownLink)
    saveAs(props.data.photoDownLink)
  }, 100)
}
/**
 * 生成全屏的方法
 */
const imgTarget = ref(null)
const { enter: onImgFullScreen } = useFullscreen(imgTarget)
/**
 * 进入详情点击事件
 */
const onToPinsClick = () => {
  emits('click', {
    id: props.data.id,
    location:imgContainerCenter.value
  })
}
/**
 * pins 跳转处理，记录图片的中心点（X|Y位置 + 宽|高的一半）
 */
 const {
  x: imgContainerX,
  y: imgContainerY,
  width: imgContainerWidth,
  height: imgContainerHeight
} = useElementBounding(imgTarget)
const imgContainerCenter = computed(() => {
  return {
    translateX: parseInt(imgContainerX.value + imgContainerWidth.value / 2),
    translateY: parseInt(imgContainerY.value + imgContainerHeight.value / 2)
  }
})


</script>

<style scoped lang="scss"></style>
