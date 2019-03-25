
import { FormControl, Validators } from '@angular/forms';
import { Todo } from './../../models/todo.model';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { AppState } from '../app.reducers';
import { Store } from '@ngrx/store';
import { ToggleTodoAction, EditTodoAction, DeleteTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputFisico') inputFisico: ElementRef;

  chkField: FormControl;
  txtInput: FormControl;

  editando: boolean;

  constructor( private store: Store<AppState>) { }
  test: string = 'hola mundo1';
  ngOnInit() {
    //console.log( this.todo )
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkField.valueChanges.subscribe(()=>{
  
      const action = new ToggleTodoAction( this.todo.id );
      this.store.dispatch( action );

    });

  }

  editar(){
    this.editando = true;

    setTimeout(() => {
      this.inputFisico.nativeElement.select();
    }, 1);
    
  }

  terminarEdicion(){
    this.editando = false;

    if(this.txtInput.invalid || this.txtInput.value === this.todo.texto) return;

    let action = new EditTodoAction(this.todo.id, this.txtInput.value)

    this.store.dispatch( action );
  }

  borrarTarea(){
    let action = new DeleteTodoAction( this.todo.id );

    this.store.dispatch( action );
  }

}
