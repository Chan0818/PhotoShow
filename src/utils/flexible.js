import { PC_DEVICE_WIDTH } from "../constants";
import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize()
export const isMobileTerminal = computed(()=>{
    return width.value < PC_DEVICE_WIDTH
})

/**
 * 初始化rem的基准值,最大为40px
 */
export const useREM = ()=>{
    //定义最大的fontsize
    const MAX_FONT_SIZE = 40
    //监听html文档被解析完成的事件
    document.addEventListener('DOMContentLoaded',()=>{
        //获取html标签
        const html = document.querySelector('html')
        //获取根元素fontSize的标准,屏幕宽度/10
        let fontSize = window.innerWidth / 10
        //获取到的fontsize不能超过定义的最大值
        fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
        //定义根元素html的fontSize的大小
        html.style.fontSize = fontSize + 'px'
    })
}