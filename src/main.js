import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './router'
import store from './store'
import axios from 'axios'


Vue.config.productionTip = false
Vue.use(VueRouter)
axios.defaults.baseURL = ''

const router = new VueRouter({
  routes,
  mode: 'history',
  
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
