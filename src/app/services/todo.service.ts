import {Injectable} from '@angular/core';
import {Todo} from "~types";
import {TODO_LIST} from "~mocks/todo-list";
import {BehaviorSubject, Observable} from "rxjs";

interface ITodo {
  searchQueryObserver: Observable<string>;
  todosList: Todo[]
}

@Injectable({
  providedIn: 'root'
})
export class TodoService implements ITodo{
  private todos: Todo[] = TODO_LIST;
  private searchQuery = new BehaviorSubject<string>('');

  get searchQueryObserver() {
    return this.searchQuery.asObservable();
  }

  get todosList () {
    return this.todos;
  }

  setQuery(query: string) {
    this.searchQuery.next(query);
  }

  addNewTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
