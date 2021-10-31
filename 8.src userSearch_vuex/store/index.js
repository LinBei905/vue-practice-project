import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
axios.interceptors.response.use(
    (response) => {
        console.log(response);
        return response.data;
    },
    function(error) {
        return Promise.reject(error);
    }
);
Vue.use(Vuex)
const state = {
    users: [],
    infoState: 0
}
const mutations = {
    update(state, { users, infoState }) {
        if (users) state.users = users;
        if (infoState) state.infoState = infoState;
    }
}
const actions = {
    async search({ commit }, params) {
        try {
            commit('update', { users: [], infoState: 1 })
            const result = await axios.get(
                `https://api.github.com/search/users?q=${params}`
            );
            const { items } = result;
            commit('update', { users: items })
            if (items.length === 0) commit('update', { infoState: 2 });
            else commit('update', { infoState: 4 });
        } catch (error) {
            commit('update', { infoState: 3 })
            console.log(error);
        }
    },
}
const getters = {}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})