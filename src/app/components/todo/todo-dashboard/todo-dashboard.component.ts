import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoService } from '~services/todo.service';
import { Todo } from '~types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
})
export class TodoDashboardComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];
  searchQuery: string = '';

  private subs: Array<Subscription> = [];

  constructor(private todosService: TodoService) {}

  ngOnInit(): void {
    this.onTodosSubscribe();
    this.onSearchQuerySubscribe();
  }

  onTodosSubscribe() {
    this.subs.push(
      this.todosService.todosItemsObserver.subscribe((todos: Todo[]) => {
        this.todos = todos;
      })
    );
  }

  onSearchQuerySubscribe() {
    this.subs.push(
      this.todosService.searchQueryObserver.subscribe((query: string) => {
        this.searchQuery = query;
      })
    );
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
