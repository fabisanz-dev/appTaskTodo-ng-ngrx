
import * as fromAction from './filter.action';

const estadoInicial: fromAction.filterValid = 'todos';

export function filtroReducer(state = estadoInicial, action: fromAction.actions): fromAction.filterValid{

    switch (action.type) {
        case fromAction.SET_FILTER:
            return action.filter;
    
        default:
            return state;
    }
}