<template>
  <div class="home">
    <HelloWorld msg="Diosito te amo"/>
    <h1>This is home</h1>
    <a class="waves-effect waves-light btn">button</a>
    <ul class="collapsible">
    <li>
      <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
  </ul>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    //HelloWorld
  },
  mounted() {
      M.AutoInit();
  }
}

 




</script>

<style>


</style>