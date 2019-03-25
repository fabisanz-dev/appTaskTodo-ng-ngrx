import { Todo } from './../models/todo.model';
import * as fromTodo from './todo.actions';

const tarea_1 = new Todo('tarea - ejemplo 1');
const tarea_2 = new Todo('tarea ejemplo 2');

const estadoInicial: Todo[] = [tarea_1, tarea_2];


export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): Todo[]{

    switch (action.type) {
        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.payload);
            return [...state, todo];
            
        case fromTodo.TOOGLE_TODO:
            return state.map(todoEdit=>{
                if(todoEdit.id === action.id){
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    }
                }else{
                    return todoEdit;
                }
            });

        case fromTodo.TOOGLEALL_TODO:
            return state.map(todo=>{
                return{
                    ...todo,
                    completado: action.completado
                }
            })

        case fromTodo.EDIT_TODO:
            return state.map(todoEdit=>{
                if(todoEdit.id === action.id){
                    return {
                        ...todoEdit,
                        texto: action.texto
                    }
                }else{
                    return todoEdit;
                }
            });

        case fromTodo.DELETE_TODO:
            return state.filter(obj => obj.id !== action.id);

        case fromTodo.DELETE_TODO_COMPLETED:
            return state.filter(obj => !obj.completado);   
    
        default:
            return state;
    }
}