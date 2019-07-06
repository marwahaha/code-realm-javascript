// Code for the TODO app goes here.
import Store from 'store.js';

let store = new Store();

store.subscribe(function(state) {
    console.log(state);
});

let action = {
    type: 'ADD_TODO',
    payload: {
        todoTask: {
            description: 'I need to create custom redux store',
            completed: false
        }
    }
}
store.dispatch(action);