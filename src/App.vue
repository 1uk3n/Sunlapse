<template>
  <div id="app" class="gray">
    <!--https://via.placeholder.com//150x65-->
    <!--Parallax-->
    <div class="parallax-container" style="z-index: 10;">
      <div class="parallax"><img src="https://via.placeholder.com//800x600"></div>
    </div>
    <!--Navigation-->
    <div id='nav'>
      <nav class="nav-extended">
        <div class="nav-content">
          <ul class="tabs tabs-transparent">
            <li class="tab"><router-link to="/">Home</router-link></li>
            <li class="tab"><router-link to="/view1">View 1</router-link></li>
            <li class="tab"><router-link to="/view2">View 2</router-link></li>
            <li class="tab"><router-link to="/view3">View 3</router-link></li>
            <li class="tab"><router-link to="/view4">View 4</router-link></li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view/>
    <!--Footer-->
    <footer class="page-footer black">
      <div class="container">
        <div class="row">
          <div class="col">
            <img class="responsive-img" src="https://via.placeholder.com//200x80">
          </div>
          <div class="col">
            <img class="responsive-img" src="https://via.placeholder.com//800x80">
          </div>
        </div>
      </div>
    </footer>


  </div>

</template>

<script>

  export default {
    mounted(){
      M.AutoInit;
    }
  }

  const $ = require('jquery')
  window.$ = $

   $(document).ready(function(){
    $('.parallax').parallax();
  });

</script>
<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

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

/**/
</style>

