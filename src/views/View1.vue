<template>
  <div class="about">
    <h1>This is view 1</h1>
    <!--<HelloWorld msg='HOlii toy en view 1'/>-->
  </div>
</template>

<script>
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'View1',
  components: {
    //HelloWorld
  },
  mounted() {
      M.AutoInit();
  }
}

</script>