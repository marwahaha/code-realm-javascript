import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        taskList:[]
    },
    getters:{
        getTaskList : (state) => {return state.taskList}
    },
    mutations:{
        addList(state,task){
            state.taskList.push(task);
        },
        deleteTask(state,index){
            state.taskList.splice(index,1);
        }
    },
    actions:{
        _addList({commit},task){
            commit('addList',task);
        },
        _deleteItem({commit},index){
            commit('deleteTask',index);
        }
    }
})