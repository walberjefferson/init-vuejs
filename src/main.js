import Vue from 'vue'
import App from './App.vue'

require('./filters');

import { makeServer } from './server';
import store from './store';
import router from './router'


import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
//Vue.use(IconsPlugin)


if (process.env.NODE_ENV === 'development') {
  makeServer();
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
