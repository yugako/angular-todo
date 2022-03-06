import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '~types';
import { TODO_LIST } from '~mocks/todo-list';

interface ITodo {
  searchQueryObserver: Observable<string>;
  todosItemsObserver: Observable<Todo[]>;
  setQuery: (query: string) => void;
  addNewTodo: (todo: Todo) => void;
  editTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService implements ITodo {
  private todos: Todo[] = TODO_LIST;
  private searchQuery = new BehaviorSubject<string>('');
  private todosItems = new BehaviorSubject<Todo[]>(this.todos);

  get searchQueryObserver() {
    return this.searchQuery.asObservable();
  }

  get todosItemsObserver() {
    return this.todosItems.asObservable();
  }

  setQuery(query: string) {
    this.searchQuery.next(query);
  }

  addNewTodo(todo: Todo) {
    this.todos.push(todo);
    this.todosItems.next(this.todos);
  }

  editTodo(todoItem: Todo) {
    this.todos = this.todos.map((todo) =>
      todo.id === todoItem.id ? todoItem : todo
    );

    this.todosItems.next(this.todos);
  }

  removeTodo(todoId: string) {
    this.todos = this.todos.filter(({ id }) => id !== todoId);
    this.todosItems.next(this.todos);
  }
}
