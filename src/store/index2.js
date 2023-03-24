import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{ // data 보관 
        showData : ''
        // state 는 쉽게 말하면 프로젝트에서 공통으로 사용할 변수를 정의한다. 
        // 프로젝트 내의 모든 곳에서 참조 및 사용이 가능하다.
        // state 를 통해 각 컴포넌트에서 동일한 값을 사용할 수 있다. 
    },
    mutations:{
        save(state, payload){
            state.parentValue = payload
            // 액션 에서 받은 commit(첫번째값, 두번째값이)
            // 첫번재는 state , 두번째는 payload 에 해당 

            // mutations의 주요 목적은 state 를 변경시키는 역활이다. 
            // mutations를 통해서면 변경 가능 
            // 비동기 처리가아닌 동기처리이며 함수가 실행된다. 
            // commit('함수명', 전달인자)로 실행 가능 

        },
    },
    actions:{
        // api 비동기 호출 
        // dispatch api 를 이용하여 호출 
        // actions 에서 backend api 를 들고 뮤테이션에 넘겨준다. 
        // actions의 api data 를 state 에 바로전달이 어려워 뮤테이션을 통해서 전달하는것 
        

        // 다른 컴포넌트에서 사용할 때는 
        // this.$store.dispatch('abc메소드') 로 호출 한다. 

        // 여기에서 작성하는것 
        // abc메소드{
        //    .....
        //}

        // 주요 목적은 mutations를 실행시키는 역할을 한다. 
        // 즉mutations가 실행되면 state 도 변경된다. 
        // 비동기 처리이며 순서에 상관없이 먼저 종료된 함수의 피드백을 받아 후속 처리한다. 
        // dispatch('함수명', 전달인자) 로 실행 가능 {root:true}
        // 비동기이기 때문에 콜백함수를 주로 작성한다. 
    },
    getters:{
        // 각 Components 의 계산된 속성 (computed)의 공통 사용 정의
        // 여러 compoennts 에서 동일한 computed 가 사용될 경우 Getters 에 정의하여 공통으로 쉽게 사용한다.
        // this.$store.getters["경로명/함수명"]사용 

        //ex)
        // isAuthenticated(state){ // 현재 로그인 상태인지 확인(블리언)
            // return !!state.user;
        // }
        //vuex의 모듈별이라 함은 stroe/account, store/member.js /store/item.js / store/category.js 등등 
        // 이것들을 나중에 컴파일 과정을 통해 하나로 합쳐진다. 



    }    
})

        //각각 컴포넌트 (dispatch)--> actions (commit)--> mutations (state)--> state -->모든 컴포넌트에서 활용
        // components 각 store 모듈에 접근 하는 방법은 
        // commponent 의 computed 내에 this. $store.state.items를 작성하는데 
        // mapState 를 활용하면 ...mapState({ items: state => state.items,})

        // mutations 의 접근 하는 방법ㅂ 
        // 기본 접근방법 : this.$store.commit('경로명/함수명')
        // ...mapMutations({
        //      add: 'item/increment' 
        //      this.add()를 this.$store.commit('item/increment')에 매핑합니다.

        // Actions 에 접근하는 방법
        // this.$store.dispatch('경로명/함수명')
        //...mapActions({
        //      add: 'item/increment' 
        //      this.add()를 this.$store.dispatch('item/increment')에 매핑합니다

        // Getters 접근 하는 방법 
        // this.$store.getters["경로명/함수명"];, this.$store.getters.doneTodosCount, this.$store.getters.getTodoById(2)
        // ...mapGetters({
        //      doneCount: 'item/doneTodosCount'
export default store