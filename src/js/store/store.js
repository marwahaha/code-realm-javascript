// The core logic of the store will go here.
// The core logic of the store will go here.
var appState = {
    todoTasks: [],
    completedTaks: []
  };
  
  function getState() {
    var state = Object.assign({}, appState);
    return state;
  }
  
  function changeStateObj(key, value) {
    
    if(!appState.hasOwnProperty(key))
      return;
      
    appState[key] = value;
  }
