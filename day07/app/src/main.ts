import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import httpRequest from './utils/httpRequest'
// Vue.prototype.$http = httpRequest





createApp(App).use(store).use(router).use(ElementPlus).mount("#app")
