import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//变中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'


createApp(App).use(router).use(ElementPlus, {locale: zhCn,}).mount("#app")
