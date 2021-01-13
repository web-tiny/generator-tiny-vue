import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import './registerServiceWorker'
import 'ant-design-vue/dist/antd.css'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

import { Drawer } from 'ant-design-vue'
Vue.use(Drawer)
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
