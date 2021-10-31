import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 存储数据
const state = {
    count: 0
}
// 存储操作数据的方法，不能包含if for 异步，是直接操作
const mutations = {
    increment(state) {
        state.count++;
    },
    decrement(state) {
        state.count--;
    },
}
// 存储操作数据的方法，可以包含if for 异步
const actions = {
    incrementEven({commit,state:{count}}) {
        if(count%2 === 0){
            commit('increment')
        }
    },
    asyncIncrement({commit}) {
        setTimeout(() => commit('increment'), 1000)
    }
}
// 存储计算属性
const getters = {}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})