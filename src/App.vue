<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
import store from '@/store/store';
import Vue from 'vue';
import VueResource from 'vue-resource';  
Vue.use(VueResource) 
export default {
  name: 'app',
  store
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body,#app{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

</style>
