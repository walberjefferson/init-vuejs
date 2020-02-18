import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/lib/util/colors';
import pt from 'vuetify/lib/locale/pt';

Vue.use(Vuetify);

const opts = {
    theme: {
        light: true,
        themes: {
            light: {
                primary: '#3f51b5',
                secondary: '#b0bec5',
                anchor: '#8c9eff',
                error: '#b71c1c',
            },
        },
    },
    icons: {
        iconfont: 'mdi',
    },
    lang: {
        current: 'pt',
        locales: {pt},
    },
};

export default new Vuetify(opts);