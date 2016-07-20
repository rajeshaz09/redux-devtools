import * as Redux from 'redux';

export interface ITodoAction extends Redux.Action {
    type: string;
}
export type VisibilityState = string;
export interface TodoState {
    text: string,
    marked: boolean,
    id: number
}
export type TodosState = Array<TodoState>
export interface RootState {
    todos?: TodosState;
    filter?: VisibilityState
}

export interface ActionCreatersMap extends Redux.ActionCreatorsMapObject {
    addTodoViaThunk: Redux.ActionCreator<ITodoAction>
}


export interface IFilterType {
    [name: string]: string;
}
export interface ITodoFilters {
    [name: string]: (todo?: TodoState) => boolean;
}