import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from "~types";

@Pipe({
  name: 'filterTodos'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], query: string): Todo[] {
    if (!todos?.length) return [];
    if (!query) return todos;

    return todos.filter(({text}) => text.toLowerCase().includes(query.toLowerCase()));
  }
}
