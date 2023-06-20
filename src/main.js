import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.scss'
import { useREM } from './utils/flexible'
import mLibs from './libs'
import 'virtual:svg-icons-register'
import store from './store'

createApp(App).use(mLibs).use(router).use(store).mount('#app')
useREM()
