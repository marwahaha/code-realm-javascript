// Code for the TODO app goes here.
//import store from './store';
let x;
function changeHandler() {
    x = document.getElementById("todo").value;
    //store.todo.push(x);
    //let newStore = {...store};
    //let updatedStore = {...newStore, newStore.todo}
  }

function handleSubmit(event){
    event.preventDefault();
    let store = {todo:[], isCompleted: false}
    let newStore = {...store, ...store.todo};
    newStore.todo.push(x);
}