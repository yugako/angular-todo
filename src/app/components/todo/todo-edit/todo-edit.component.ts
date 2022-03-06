import { Component, OnInit } from '@angular/core';
import { Todo } from '~types';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '~services/todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss'],
})
export class TodoEditComponent implements OnInit {
  todo!: Todo | undefined;

  constructor(
    private route: ActivatedRoute,
    private todosService: TodoService
  ) {}

  ngOnInit(): void {
    const todoId = this.route.snapshot.paramMap.get('todo-id');

    this.todosService.todosItemsObserver.subscribe((todos: Todo[]) => {
      this.todo = todos.find(({ id }) => id === todoId);
    });
  }
}
