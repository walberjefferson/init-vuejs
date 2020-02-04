import Vue from 'vue'
import App from './App.vue'

import { makeServer } from './server';
import store from './store';
import router from './router'

import { MdButton, MdContent, MdTabs, MdApp } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(MdApp)

import { BBadge, BCard, BJumbotron } from 'bootstrap-vue'
Vue.component('b-badge', BBadge)
Vue.component('b-card', BCard)
Vue.component('b-jumbotron', BJumbotron)


Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
