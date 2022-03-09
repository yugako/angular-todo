import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uniqueId } from 'uuid';
import { Todo, TSelectOptions } from '~types';
import {
  EMPTY_TODO,
  MIN_TODO_TEXT_LENGTH,
  TODO_SEVERITY_OPTIONS,
  TODO_STATUSES_OPTIONS,
  todoValidation,
} from '~constants';
import { TodoService } from '~services/todo.service';
import { setDeadline } from '~utils';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @Input() todo!: Todo | undefined;

  todoForm!: FormGroup;

  validationMessages = todoValidation;

  todoStatusesOptions: TSelectOptions[] = TODO_STATUSES_OPTIONS;
  todoSeverityOptions: TSelectOptions[] = TODO_SEVERITY_OPTIONS;

  constructor(private todosService: TodoService, private router: Router) {}

  ngOnInit() {
    this.todoForm = new FormGroup({
      text: new FormControl(this.todo?.text || EMPTY_TODO.text, [
        Validators.required,
        Validators.minLength(MIN_TODO_TEXT_LENGTH),
      ]),
      status: new FormControl(
        this.todo?.status || EMPTY_TODO.status,
        Validators.required
      ),
      severity: new FormControl(
        this.todo?.severity || EMPTY_TODO.severity,
        Validators.required
      ),
      deadline: new FormControl(
        setDeadline(this.todo?.deadline),
        Validators.required
      ),
    });
  }

  onSubmit() {
    if (this.todoForm.valid) {
      this.todo
        ? this.todosService.editTodo({
            ...this.todoForm.value,
            id: this.todo.id,
          })
        : this.todosService.addNewTodo({
            ...this.todoForm.value,
            id: uniqueId(),
          });

      this.router.navigate(['']);
    }
  }
}
