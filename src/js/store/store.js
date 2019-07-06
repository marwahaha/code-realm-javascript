// The core logic of the store will go here.

var TodoStore = function(){
    var todos;
    var initStore = function()
    {
       this.todos = [];
    } 

    var addTodo = function(todo)
    {
        
        var date = new Date()
        var todoData = 
        {
            "id":date.getTime(),
            "name":todo.name,
            "status":todo.status,
            "date":todo.date,
            "description":todo.description
        }
        this.todos.push(todoData)
    }

    var fetchTodo = function(id)
    {
        return this.todos.filter(function(todo,index,todos){
                if(id==todos[index].id)
                return todo;
        })
    }

    var fetchTodos = function()
    {
        return this.todos;
    }

    var markUnmarkTodo = function(id,status)
    {
        var todoData = this.todos.filter(function(todo,index,todos){
            if(id==todos[index].id)
            return {index:index,todo:todo};
        })
        this.todos[todoData.index].status = status;
        return this.todos[todoData.index];
    }

    var deletTodo = function(id)
    {
        var todoData = this.todos.filter(function(todo,index,todos){
            if(id==todos[index].id)
            return {index:index,todo:todo};
        })
        
        return delete this.todos[todoData.index];
    }

   
}    

module.exports.TodoStore = TodoStore;