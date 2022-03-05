import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

import { v4 as uuidv4 } from 'uuid';

import {TodoService} from "~services/todo.service";
import {TSelectOptions} from "~types";
import {TODO_SEVERITY_OPTIONS, TODO_STATUSES_OPTIONS} from "~constants";

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.scss']
})
export class TodoNewComponent{
  newTodoForm = new FormGroup({
    text: new FormControl(''),
    status: new FormControl(''),
    severity: new FormControl(''),
    deadline: new FormControl(new Date().toDateString())
  });

  todoStatusesOptions: TSelectOptions[] = TODO_STATUSES_OPTIONS;
  todoSeverityOptions: TSelectOptions[] = TODO_SEVERITY_OPTIONS;

  constructor(
    private todosService: TodoService,
    private router: Router
  ) { }

  onSubmit() {
    if (this.newTodoForm.valid) {
      this.todosService.addNewTodo({...this.newTodoForm.value, id: uuidv4()});
      this.router.navigate(['']);
    }
  }
}
