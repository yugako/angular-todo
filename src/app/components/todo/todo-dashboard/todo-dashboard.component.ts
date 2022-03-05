import {Component, OnChanges, OnInit} from '@angular/core';
import {Todo} from "~types";
import {TodoService} from "~services/todo.service";

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  todos: Todo[] = [];
  searchQuery: string = '';

  constructor(
    private todosService: TodoService
  ) { }

  ngOnInit(): void {
    this.todos = this.todosService.todosList;

    this.todosService.searchQueryObserver.subscribe((query: string) => {
      this.searchQuery = query;
    })
  }
}
