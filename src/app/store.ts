import {ToDoModel} from './todo/tasks.model';

import {state} from '@angular/animations';

export interface StateModel {
  todos: ToDoModel[];
}

export class State {
  maintainedStateList: StateModel[] = [];
  currentActiveState: StateModel;

  getAllStates() {
    return this.cloneFunction(this.maintainedStateList);
  }

  getCurrentActiveState() {
    return this.cloneFunction(this.currentActiveState);
  }

  getTodoById(todoId) {
    if (this.currentActiveState) {

      const cloneState = this.cloneFunction(this.currentActiveState);
      cloneState.todos.find((ele) => {
        if (ele.todoId === todoId) {
          return ele;
        }
      });
    } else {
      return null;
    }
  }

  getAllTodosList() {
    if (this.currentActiveState) {
      const cloneState = this.cloneFunction(this.currentActiveState);
      return cloneState.todos;
    } else {
      return [];
    }
  }

  addTodoItem(todos) {
    if (this.currentActiveState) {
      const cloneState = this.cloneFunction(this.currentActiveState);
      cloneState.todos.push(todos);
      this.maintainedStateList.push(cloneState);
    } else {
      const currActiveState = {} as StateModel;
      currActiveState.todos = [todos];
      this.maintainedStateList.push(currActiveState);
    }
  }

  cloneFunction(inputObj) {
    const cloneObj = Object.assign({}, inputObj);
    return cloneObj;
  }

}


export const stateObj = new State();
