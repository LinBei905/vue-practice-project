import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from "./store"
Vue.use(Vuex)
Vue.config.productionTip = false
new Vue({
  el: "#app",
  render: h => h(App),
  store //在配置对象中使用，组件对象可以通过this.$store使用
})
