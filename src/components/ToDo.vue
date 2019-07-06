<template>
  <div class="hello">
    <input :placeholder="placeholder" class="col-md-4" v-model="task" @keypress.enter="addNewUser" type="text"  />
      <ul>
        <li class="col-md-8 row" v-for="(list , index) in getTaskList" :key="index">
         <span>{{list}}</span> 
          <button class="btn btn-primary float-right col-md-2">Completed</button>
          <button class="btn btn-primary float-right col-md-2" @click=deleteItem(index)>Delete</button>

        </li>
      </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data(){
    return{
      placeholder:'What need to complete?',
      task:''
    }
  },
  computed:{
    ...mapGetters([
      'getTaskList'
    ])
  },
  methods:{
    addNewUser(){
      if(this.task !== ''){
        this.$store.dispatch('_addList',this.task);
        this.task = '';
      }
    },
    deleteItem(index){
      this.$store.dispatch('_deleteItem',index);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  
}
li {
  display: block;
  padding:10px;
  margin: 0 10px;
  height: 60px;
}
li:nth-child(odd){
  background-color: rgb(231, 224, 224);
}

a {
  color: #42b983;
}
.hello input{
  margin:10px;
}

button{
  margin-left: 10px;
}

</style>
