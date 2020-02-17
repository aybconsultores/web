import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './scss/app.scss'

import ApiService from "@/common/api.service";

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
ApiService.init();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')