import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index.js' // store 등록 전역으로 공유 가능 
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
Vue.use(Element, { size: 'small', zIndex: 3000 });

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
