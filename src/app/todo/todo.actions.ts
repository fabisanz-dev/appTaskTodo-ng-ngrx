import { Action } from "@ngrx/store";

export const AGREGAR_TODO = '[TODO] Agregar TODO';
export const TOOGLE_TODO = '[TODO] Toogle completado TODO';
export const TOOGLEALL_TODO = '[TODO] Toogle all completados TODO';
export const EDIT_TODO = '[TODO] Edit TODO TODO';
export const DELETE_TODO = '[TODO] Delete TODO';
export const DELETE_TODO_COMPLETED = '[TODO] Delete TODO Completed';

export class AgregarTodoAction implements Action{
    readonly type = AGREGAR_TODO;
    constructor( public payload: string ){}
}

export class ToggleTodoAction implements Action{
    readonly type = TOOGLE_TODO;
    constructor( public id: number ){}
}

export class ToggleAllTodoAction implements Action{
    readonly type = TOOGLEALL_TODO
    constructor( public completado: boolean ){}
}

export class EditTodoAction implements Action{
    readonly type = EDIT_TODO;
    constructor( public id: number, public texto: string){}
}

export class DeleteTodoAction implements Action{
    readonly type = DELETE_TODO;
    constructor( public id: number ){}
}

export class DeleteTodoCompletedAction implements Action{
    readonly type = DELETE_TODO_COMPLETED;
}

export type Acciones = AgregarTodoAction 
                    |  EditTodoAction 
                    | DeleteTodoAction 
                    | DeleteTodoCompletedAction
                    | ToggleTodoAction
                    | ToggleAllTodoAction;