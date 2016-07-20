import * as Redux from 'redux';

export interface ICounterAction extends Redux.Action {
    type: string;
}
export interface TodoState {
    text: string,
    marked: boolean,
    id: number
}
export type TodosState = Array<TodoState>
export interface RootState {
    todos: TodosState;
    visibilityFilter: string
}


export interface ActionCreatersMap extends Redux.ActionCreatorsMapObject {
    addTodoViaThunk: Redux.ActionCreator<ICounterAction>
}


export interface IFilterType {
    [name: string]: string;
}
