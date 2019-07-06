// Code for the TODO app goes here.

(function() {
    var TodoStore = require('../store/store').TodoStore;
        
        var Todo = function(){
            this.todos = [];
            var todoId = document.getElementById('todos');
            this.fetchTodos = ()=>{
               this.todos = this.TodoStore.fetchTodos(); 
               this.displayTodos();
            }
            this.addTodo = ()=>{
                let todo = {
                    "name":document.getElementById('todoName').value,
                    "description":document.getElementById('todoDescription').value,
                    "date":document.getElementById('todoDate').value,
                    "status":"Open"
                }
                this.TodoStore.addTodo(todo);
                this.fetchTodos();
            }
            this.deleteTodo = (id)=>{

            }
            this.markUnmarkTodo = (id,status)=>{

            }

            this.displayTodos = ()=>{
                let html = "";
                if(this.todos.length>0)
                for(let todo of this.todos)
                {
                    html+=`<div>
                        `+todo.name+`&nbsp;&nbsp;<p>`+todo.description+`</p>&nbsp;&nbsp;`+todo.date+`&nbsp;&nbsp;<button type="button" onclick="markUnmarkTodo('`+todo.id+`','`+todo.status+`')" title="Mark/Unmark Todo ">`+todo.status+`</button>
                        &nbsp;&nbsp;<button type="button" onclick="deleteTodo('`+todo.id+`','`+todo.status+`')" title="Delete Todo ">Delete</button>
                        </div>`
                }
                else
                html="<p>Sorry No todos available</p>"   
                this.todoId.innerHtml = html
            }
        }
        Todo.fetchTodos();
  }());