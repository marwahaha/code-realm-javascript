// The core logic of the store will go here.

export var tasksStore = [];

export const fetchStore = function() {
  return tasksStore;
};
export const addToStore = function(task) {
  tasksStore.push(task);
  return tasksStore;
};

export const updateStore = function(item) {
  for (var i = 0; i < tasksStore.length; i++) {
    if (tasksStore[i].toDoItem === item.toDoItem) {
      tasksStore[i] = item;
      break;
    }
  }
  return tasksStore;
};
