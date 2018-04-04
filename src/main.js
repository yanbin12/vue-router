import Vue from 'vue'
import App from './App.vue'
import router from './router'
 import Bin from 'vue-resource'

Vue.config.productionTip = false
Vue.use(Bin)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
