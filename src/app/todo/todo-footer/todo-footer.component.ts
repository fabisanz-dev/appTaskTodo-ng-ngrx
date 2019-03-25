
import { Component, OnInit } from '@angular/core';

import * as fromFilterAction from '../filter/filter.action';
import { DeleteTodoCompletedAction } from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { Todo } from 'src/app/models/todo.model';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtersValid: fromFilterAction.filterValid[] = ['todos' , 'pendientes' , 'completados'];
  filterActive: fromFilterAction.filterValid;

  count_pendientes: number = 0;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.store.select('filter').subscribe(state=>{
      this.filterActive = state;
    });

   this.store.select('todos').subscribe(state=>{
      this.getCountPendientes(state);
    });

  }

  filterActivated(itemFilter){
    const action = new fromFilterAction.SetFilterAction( itemFilter );
    this.store.dispatch( action );
  }

  getCountPendientes( todo: Todo[] ){
    this.count_pendientes = todo.filter( obj => !obj.completado).length;
  }

  clearCompleted(){
    let action = new DeleteTodoCompletedAction();
    this.store.dispatch( action );
  }

}
