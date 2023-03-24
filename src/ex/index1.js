import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        count: 1
    },
    mutations: {
        doubleCount(state){
            state.count = state.count * 2
        },
        multiCountAndNumber(state, payload){
            state.count = state.count * payload 
        }
    }
})

export default store 