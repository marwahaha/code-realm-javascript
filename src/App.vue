<template>
  <div id="app container">
    <ToDo />
  </div>
</template>

<script>
import ToDo from  './components/ToDo.vue';
import Store  from './Store';

export default {
  name: 'app',
  components: {
    ToDo  
  },
  data(){
    return{
      
    }
  },
  mounted(){
    
  },
  methods:{
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
