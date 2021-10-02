<template>
  <div id="app">
    <div id='nav' class="white-text">
      <router-link to="/">Home</router-link> asdsa|  
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>


export default {
  mounted(){
    M.AutoInit
  }
}
</script>

<style>
/*@import '../css/materialize.css';*/

#app {
  background-color: #FFF;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

