import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoService } from '~services/todo.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  searchTodo!: FormControl;

  constructor(private todosService: TodoService) {}

  ngOnInit(): void {
    this.searchTodo = new FormControl('');
    this.onChange();
  }

  onChange() {
    this.searchTodo.valueChanges.subscribe((query) => {
      this.todosService.setQuery(query);
    });
  }
}
