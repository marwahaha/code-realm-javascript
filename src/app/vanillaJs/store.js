export function state() {
  const maintainedStateList: any[];
  let currentActiveState;

  function getAllStates() {
    return cloneFunction(maintainedStateList);
  }

  function getCurrentActiveState() {
    return cloneFunction(currentActiveState);
  }

  function getCurrentTodoById(todoId) {
    const cloneState = cloneFunction(maintainedStateList);
    this.cloneState.todos.find((ele) => {
      if (ele.todoId === todoId) {
        return ele;
      }
    });
  }


  function getAllTodosList() {
    const cloneState = cloneFunction(maintainedStateList);
    return this.cloneState.todos;
  }

  //
  //
  // function assignInitialState(todosList) {
  //   const cloneState = cloneFunction(maintainedStateList);
  //   this.state;
  // }

  function updateTodoItemById(todosList) {
    const cloneState = cloneFunction(maintainedStateList);

    this.state;
  }

  function addTodoItemById(todosList) {
    this.state;
  }

  let stateFunctions = {
    getAllStates: getAllStates,
    getCurrentActiveState: getCurrentActiveState,
    getCurrentTodoById: getCurrentTodoById,
    getAllTodosList: getAllTodosList,
    assignInitialState: assignInitialState,
    updateTodoItemById: updateTodoItemById,
    addTodoItemById: updateTodoItemById
  };

  return stateFunctions;

}


export function cloneFunction(inputObj) {
  let cloneObj = Object.assign({}, inputObj);
  return cloneObj;
}
