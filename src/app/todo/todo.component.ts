import {Component, OnInit} from '@angular/core';
import {ToDoModel} from './tasks.model';
import {stateObj} from '../store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: ToDoModel[];
  stateDetails;
  isTodoEmpty: true;

  constructor() {
  }

  ngOnInit() {
    this.stateDetails = stateObj;
    this.getInitTodoLists();
    this.addTodo();
    console.log(this.stateDetails);
    console.log(this.stateDetails.getAllStates());
  }

  getInitTodoLists() {
    this.todoList = this.stateDetails.getAllTodosList();
  }


  addTodo() {
    this.stateDetails.addTodoItem({} as ToDoModel);
    if (this.todoList.length > 0) {
      this.isTodoEmpty = false;
    }
  }
}
