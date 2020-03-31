import 'font-awesome/css/font-awesome.css'
import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import '@/config/msgs'
import '@/config/axios'

Vue.config.productionTip = false
Vue.config.performance = true
Vue.use(CoreuiVue)

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App
  }
})
