<template>
  <div
    class="relative h-screen bg-white dark:bg-zinc-800 text-center xl:bg-zinc-200"
  >
    <header-vue></header-vue>
    <!-- 表单区 -->
    <div
      class="block px-3 mt-4 dark:bg-zinc-800 xl:bg-white xl:w-[388px] xl:dark:bg-zinc-900 xl:m-auto xl:mt-8 xl:py-4 xl:rounded-sm xl:shadow-lg"
    >
      <h3
        class="mb-2 font-semibold text-base text-main dark:text-zinc-300 hidden xl:block"
      >
        账号登录
      </h3>
      <!-- 表单 -->
      <vee-form @submit="onLoginHandler">
        <vee-field
          class="dark:bg-zinc-800 dark:text-zinc-400 border-b-zinc-400 border-b-[1px] w-full outline-0 pb-1 px-1 text-base focus:border-b-main dark:focus:border-b-zinc-200 xl:dark:bg-zinc-900"
          name="username"
          type="text"
          placeholder="用户名"
          autocomplete="on"
          :rules="validateUsername"
          v-model="loginForm.username"
        />
        <vee-error-message
          class="text-sm text-red-600 block mt-0.5 text-left"
          name="username"
        ></vee-error-message>
        <vee-field
          class="dark:bg-zinc-800 dark:text-zinc-400 border-b-zinc-400 border-b-[1px] w-full outline-0 pb-1 px-1 text-base focus:border-b-main dark:focus:border-b-zinc-200 xl:dark:bg-zinc-900"
          name="password"
          type="password"
          placeholder="密码"
          autocomplete="on"
          :rules="validatePassword"
          v-model="loginForm.password"
        />
        <vee-error-message
          name="password"
          class="text-sm text-red-600 block mt-0.5 text-left"
        ></vee-error-message>

        <div class="pt-1 pb-3 leading-[0px] text-right">
          <a
            @click="onToReg"
            class="inline-block p-1 text-zinc-400 text-right dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400 text-sm duration-400 cursor-pointer"
          >
            去注册
          </a>
        </div>

        <m-button class="w-full dark:bg-zinc-900 xl:dark:bg-zinc-800"
          :loading="loading" :isActiveAnim="false"
        >
          登录
        </m-button>
      </vee-form>

      <div class="flex justify-around mt-4">
        <!-- QQ -->
        <m-svg-icon class="w-4 cursor-pointer" name="qq"></m-svg-icon>
        <!-- 微信 -->
        <m-svg-icon class="w-4 cursor-pointer" name="wexin"></m-svg-icon>
      </div>
    </div>
    <!-- 人类行为验证模块 -->
    <slider-captcha-vue
      v-if="isSliderCaptchaVisible"
      @close="isSliderCaptchaVisible = false"
      @success="onCaptchaSuccess"
    ></slider-captcha-vue>
    <!-- iconfont 在线图标，主要用于 sliderCaptcha -->
  <link rel="stylesheet"
    href="https://at.alicdn.com/t/font_3042963_nv614canpao.css?spm=a313x.7781069.1998910419.47&file=font_3042963_nv614canpao.css" />

  </div>
</template>

<script setup>
import headerVue from '../components/header.vue'
import {
  Form as VeeForm,
  Field as VeeField,
  ErrorMessage as VeeErrorMessage
} from 'vee-validate'
import { validateUsername, validatePassword } from '../validate.js'
import sliderCaptchaVue from './slider-captcha.vue'
import { ref } from 'vue'
import {LOGIN_TYPE_USERNAME} from '@/constants'
import { useStore } from 'vuex'
import {useRouter} from 'vue-router'

// 控制 sliderCaptcha 展示
const isSliderCaptchaVisible = ref(false)

/**
 * 登录触发
 */
const onLoginHandler = () => {
  isSliderCaptchaVisible.value = true
}

/**
 * 人类行为验证通过
 */
const onCaptchaSuccess = async () => {
  isSliderCaptchaVisible.value = false
  // 登录操作
  console.log('执行登录操作')
  onLogin()
}

const store = useStore()
const router = useRouter()
const loading = ref(false)
/**
 * 用户登陆行为
 */
const onLogin = async()=>{
  loading.value = true
  //执行登陆操作
  try {
    await store.dispatch('user/login',{
      ...loginForm.value,
      loginType:LOGIN_TYPE_USERNAME
    })
  } finally {
    loading.value = false
  }
  store.commit('app/changeRouterType','push')
  router.push('/')
}

// 用户输入的用户名和密码
const loginForm = ref({
  username: 'LGD_Sunday',
  password: '123123'
})
/**
 * 去注册
 */
const onToReg = ()=>{
  store.commit('app/changeRouterType','push')
  router.push('/register')
}

</script>
<style scoped lang="scss"></style>
