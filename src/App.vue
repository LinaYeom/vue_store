<template>
  <div id="app">    
    <h1>MainComponent</h1>
    <main-page></main-page>

    <p/>
    <descendants-page
      tpye="text"
      v-if="descendants"
      @close="descendants=false"
    />
    <el-button @click="descendants=true">uncle</el-button>
  </div>
</template>

<script>
import DescendantsPage from './views/descendants/DescendantsPage.vue'
import MainPage from './views/MainPage.vue'

export default {
  name: 'App',
  components: {
    MainPage,
    DescendantsPage
  },
  data(){
    return{
      descendants:false,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
