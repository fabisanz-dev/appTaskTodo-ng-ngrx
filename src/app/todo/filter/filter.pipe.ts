
import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from './../../models/todo.model';
import * as fromFilterAction from './filter.action';


@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todo: Todo[], filter: fromFilterAction.filterValid): Todo[] {

    switch (filter) {
      case'completados':
        return todo.filter( obj => obj.completado );
        
      case 'pendientes':
        return todo.filter( obj => !obj.completado );
    
      default:
        return todo;
    }

  }

}
