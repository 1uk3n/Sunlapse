<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld msg='HOlii toy en about'/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted(){
    M.AutoInit
  }
}
</script>