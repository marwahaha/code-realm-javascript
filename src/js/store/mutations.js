export default {
    addItem(state, payload) {
        state.todos.push(payload);
        localStorage.setItem('todos', JSON.stringify(state.todos))
        return state;
    },
    clearItem(state, payload) {
        state.todos.splice(payload.index, 1);
        localStorage.setItem('todos', JSON.stringify(state.todos))
        return state;
    },
    statusChange(state, payload) {
        state.todos[payload.index].completed = !state.todos[payload.index].completed 
        localStorage.setItem('todos', JSON.stringify(state.todos))
        return state;
    }

};