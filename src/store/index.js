import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{  // 데이터 저장소 
        showData : '',

    },
    mutations:{ // state 를 변경시키는 역할
        save(state, payload){
            state.showData = payload
        },
    },
    actions:{ 
        // 비동기이므로 콜백함수를 주로 작성함 
    },
    getters:{ 
        userInfo: function(state){
            return state.userInfo.name
        }

    }    
})

export default store