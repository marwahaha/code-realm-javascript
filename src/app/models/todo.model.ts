export class ToDo {
  toDoItem: string;
  isDone: boolean;
  constructor(task) {
    this.toDoItem = task;
    this.isDone = false;
  }
}
