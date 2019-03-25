import { Todo } from './../../models/todo.model';
import { AppState } from '../app.reducers';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromFilterAction from '../filter/filter.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todo_list: Todo[] = [];
  filter: fromFilterAction.filterValid;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('todos').subscribe(state=>{
      sessionStorage.setItem('todos', JSON.stringify(state));
      
      this.todo_list = state;
      
    });

    

    this.store.select('filter').subscribe(state=>{
      this.filter = state;
    });

  }


}
