import { Todo } from "../models/todo.model";
import { ActionReducerMap } from "@ngrx/store";

//reducers
import * as fromTodo from './todo.reducer';
import * as fromFilter from './filter/filter.reducer';


import { filterValid } from "./filter/filter.action";

export interface AppState{
    todos: Todo[];
    filter: filterValid;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filter: fromFilter.filtroReducer
}