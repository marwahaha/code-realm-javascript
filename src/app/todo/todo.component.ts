import { Component, OnInit } from "@angular/core";
import { ToDo } from "../models/todo.model";
import { Observable } from "rxjs";
import { addToDo, toDofetchStore, toggleItem } from "./../components/ToDo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent implements OnInit {
  public task;
  public allToDoTasks$: Observable<ToDo[]>;

  constructor() {}

  ngOnInit() {
    this.subscribeTasks();
  }

  subscribeTasks() {
    this.allToDoTasks$ = toDofetchStore();
  }

  addTask() {
    const newTodo = new ToDo(this.task);

    this.allToDoTasks$ = addToDo(newTodo);
  }

  toggleIsDone(item) {
    this.allToDoTasks$ = toggleItem(item);
  }
}
