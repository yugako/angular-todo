import { Component, OnInit } from '@angular/core';
import { TodoService } from '~services/todo.service';
import { Todo } from '~types';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss'],
})
export class TodoDashboardComponent implements OnInit {
  todos: Todo[] = [];
  searchQuery: string = '';

  constructor(private todosService: TodoService) {}

  ngOnInit(): void {
    this.onTodosSubscribe();
    this.onSearchQuerySubscribe();
  }

  onTodosSubscribe() {
    this.todosService.todosItemsObserver.subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }

  onSearchQuerySubscribe() {
    this.todosService.searchQueryObserver.subscribe((query: string) => {
      this.searchQuery = query;
    });
  }
}
