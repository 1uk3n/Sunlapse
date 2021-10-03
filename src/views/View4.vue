<template>
  <div class="view4">
    <h1>This is view 4</h1>
    <!--<HelloWorld msg='HOlii toy en about'/>-->
  </div>
</template>

<script>
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'View4',
  components: {
    //HelloWorld
  },
  mounted() {
      M.AutoInit();
  }
}
</script>