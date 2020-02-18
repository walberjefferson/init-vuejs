import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'

import {makeServer} from './server';
import store from './store';
import router from './router';


Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'development') {
    makeServer();
}

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
}).$mount('#app');
