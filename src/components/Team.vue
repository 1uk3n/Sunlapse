<template>
    <div class="row">
        <div class="col s3">{{ nombre }}</div>
        <a class="col s1" v-bind:href="github" ><i class="small material-icons white-text">error</i></a>
        <a class="col s1" v-bind:href="linkedin" ><i class="small material-icons white-text">error</i></a>
    </div>   
</template>

<script>
export default {
  name: 'Team',
  props: {
    nombre: String, 
    github: String, 
    linkedin: String
  }
}
</script>