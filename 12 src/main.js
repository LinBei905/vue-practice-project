import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)

Vue.config.productionTip = false
new Vue({
  // 配置总线，将vm挂载到Vue原型链上 
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  el: "#app",
  render: h => h(App),
})
