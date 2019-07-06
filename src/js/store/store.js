// The core logic of the store will go here.
let todo= require("./../entities/todo");
const immutable = require('immutable');
let todoList=[];
module.exports.addTODO=function (text,status){
    todoList.push(new todo(text,status));
}
module.exports.removeTODO=function (index){
    todoList=todoList.splice(index,1);
}
module.exports.changeTODO=function(data,index){
    todoList[index].setData
}