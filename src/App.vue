<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
    <Home/>
  </div>
</template>

<script>
  // import {Button, Header, Footer, Content} from 'iview'
  import Home from './components/Home'
  export default {
  name: 'App',
    components: {Home}
  }
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
</style>
