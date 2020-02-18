import axios from 'axios';

const state = {
    all: []
}

const getters = {}

const actions = {
    getAll({ commit }) {
        axios.get('api/products').then(({data}) => {
            commit('setProducts', data.products)
        }).catch(({response}) => (this.error = response.data));
    }
}

const mutations = {
    setProducts (state, products) {
        state.all = products
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}