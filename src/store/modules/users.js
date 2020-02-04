import axios from 'axios';

const state = {
    all: []
}

const getters = {}

const actions = {
    getAllUsers ({ commit }) {
        axios.get('api/users').then(({data}) => {
            commit('setUsers', data.users)
        }).catch(({response}) => (this.error = response.data));
    }
}

const mutations = {
    setUsers (state, users) {
        state.all = users
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}