// The core logic of the store will go here.

    let subscribers = [];
    
    function Store() {
        this.state = {};

        this.state = this.reduce(this.state, { todos: [] });
    }

    Store.prototype.getState = function () {
        return this.state;
    };

    Store.prototype.dispatch = function (action) {
        this.state = this.reduce(this.state, action);

        this.notifySubscribers();

        return action;
    };

    Store.prototype.reduce = function (state, action) {
        return {
            todos: toDoReducer(state.todos, action)
        };
    };

    Store.prototype.subscribe = function (fn) {
        subscribers.push(fn);
    };

    Store.prototype.notifySubscribers = function () {
        subscribers.forEach(function (subscriber) {
            subscriber(this.state);
        }.bind(this));
    };

    function toDoReducer(todos, action) {
        switch(action.type) {
            case 'ADD_TODO':
                if(Object.prototype.toString.call(todos) !== "[object Array]") {
                    todos = [];
                }
                todos.push(action.payload.todoTask);
                break;

            case 'MARK_AS_COMPLETED':
                todos[action.payload.todoIndex].completed = true;
                break;

            case 'MARK_AS_OPEN':
                todos[action.payload.todoIndex].completed = false;
                break;

            case 'DELETE_TODO':
                delete todos[action.payload.todoIndex];
                break; 
        };

        return todos;
    }

    module.exports = Store;