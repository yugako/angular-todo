import { Component, Input } from '@angular/core';
import { Todo } from '~types';
import { TodoService } from '~services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo: Todo = {
    id: '',
    text: '',
    status: '',
    severity: '',
    deadline: new Date().toLocaleDateString('en-CA'),
  };

  constructor(private todosService: TodoService) {}

  removeTodo(id: string) {
    this.todosService.removeTodo(id);
  }
}
