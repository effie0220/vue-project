<template>
  <div id="app">
     <Logo></Logo> 
     <Navbar></Navbar> 
    <router-view></router-view>
  </div>
</template>

<script>
import $ from 'jquery';
import Logo from './components/Logo'
import Navbar from './components/Navbar'
export default {
  name: 'app',
  data() {
    return {

    }
  },
  components: {
    Logo,
    Navbar
  }
}
</script>

<style>
    @import './assets/css/common.css';  
   @import './assets/css/bootstrap.min.css';  
    @import './assets/css/themify-icons.css'; 
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;  
}
</style>
