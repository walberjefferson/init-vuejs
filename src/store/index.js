import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: [],
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
    },
    actions: {
        getAll({commit}) {
            axios.get('api/users').then(({data}) => {
                commit('SET_USERS', data.users);
            }).catch(({response}) => (this.error = response.data));

        }
    },
    modules: {}
});