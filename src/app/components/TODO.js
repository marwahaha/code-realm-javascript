// Code for the TODO app goes here.export function ToDoLib(){
import { addToStore, fetchStore, updateStore } from "../store/store";
import { of } from "rxjs";

export const toDofetchStore = function() {
  const newStore = fetchStore();
  return of(newStore);
};
export const addToDo = function(toDoItem) {
  const newStore = addToStore(toDoItem);
  return of(newStore);
};

export const toggleItem = function(toDoItem) {
  const updatedItem = Object.assign({}, toDoItem, {
    isDone: !toDoItem.isDone
  });
  const newStore = updateStore(updatedItem);

  return of(newStore);
};
