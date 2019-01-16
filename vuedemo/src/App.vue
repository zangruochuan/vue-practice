<template>
  <div id="app">
    <!-- `<img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Grammer1 msg="Grammer1-test"></Grammer1>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Grammer1 from './components/test.vue'

export default {
  name: 'app',
  components: {
    //HelloWorld,
    Grammer1
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
