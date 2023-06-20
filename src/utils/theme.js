import store from '@/store'
import { watch } from 'vue'
import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from '@/constants'

/**
 * 监听系统主题变更
 */
let matchMedia
const watchSystemThemeChange = () => {
  // 仅需初始化一次即可
  if (matchMedia) return
  matchMedia = window.matchMedia('(prefers-color-scheme: dark)')
  // 监听主题变更
  matchMedia.onchange = function () {
    changeTheme(THEME_SYSTEM)
  }
}
/**
 * 初始化主题
 */
const changeTheme =
  (val) => {
    // html 的 class
    let themeClassName = ''
    switch (val) {
      case THEME_LIGHT:
        themeClassName = 'light'
        break
      case THEME_DARK:
        themeClassName = 'dark'
        break
      case THEME_SYSTEM:
        watchSystemThemeChange()
        themeClassName = matchMedia.matches ? 'dark' : 'light'
        break
    }
    // 修改 html 的 class
    document.querySelector('html').className = themeClassName
  }

export default () => {
  watch(
    () => store.getters.themeType,changeTheme,
    {
      // 初始执行一次
      immediate: true
    }
  )
}
