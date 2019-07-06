import Vue from 'vue'
import App from './App.vue'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {store} from './Store'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
