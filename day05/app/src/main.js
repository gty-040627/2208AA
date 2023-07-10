import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//element全局引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import httpRequest from '../untils/httpRequest.js'
Vue.prototype.$http = httpRequest

//图标引入
import '@/icons'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
