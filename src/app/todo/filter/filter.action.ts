import { Action } from '@ngrx/store';

export const SET_FILTER = '[FILTER] SET FILTER';
export type filterValid = 'todos' | 'pendientes' | 'completados';

export class SetFilterAction implements Action{
    readonly type = SET_FILTER;
    constructor( public filter: filterValid ){}
}

export type actions = SetFilterAction;