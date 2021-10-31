import Vue from 'vue'
import  { Button } from 'element-ui';
import App from './App.vue'
Vue.config.productionTip = false
Vue.use(Button)
new Vue({
  el: "#app",
  render: h => h(App),
})
