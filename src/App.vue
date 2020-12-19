<template>
  <div id="app">
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue"
export default {
  name: 'App',
  components:{
    Nav
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');
*{
  font-family: "poppins", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
