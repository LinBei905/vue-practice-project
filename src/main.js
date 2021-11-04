import Vue from 'vue'
import App from './App.vue'
import { Button, Row, Col, Container, Header, Main } from 'element-ui';
Vue.use(Button).use(Row).use(Col).use(Container).use(Header).use(Main);
Vue.config.productionTip = false
new Vue({
  el: "#app",
  render: h => h(App),
})
