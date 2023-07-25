import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
const pinia = createPinia()
// 1. 引入你需要的组件
import Vant from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';
//持久化插件
import persist from 'pinia-plugin-persistedstate'
//图标组件-打包svg地图
import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(createPinia().use(persist))
app.use(router)
app.use(pinia)
app.use(Vant)
app.mount('#app')
