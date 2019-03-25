import { Component, OnInit } from '@angular/core';


import { AppState } from './app.reducers';
import { Store } from '@ngrx/store';
import { ToggleAllTodoAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  flag_toogleAll: boolean = false;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll(){
    this.flag_toogleAll = !this.flag_toogleAll;

    console.log( this.flag_toogleAll );

    let action = new ToggleAllTodoAction(this.flag_toogleAll);

    this.store.dispatch( action );
  }

}
