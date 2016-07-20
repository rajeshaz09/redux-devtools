import * as Redux from 'redux';

interface ICounterAction extends Redux.Action {
    type: string;
}
interface TodoState {
    text: string,
    marked: boolean,
    id: number
}
type TodosState = Array<TodoState>
interface RootState {
    todos: TodosState;
    visibilityFilter: string
}


interface ActionCreatersMap extends Redux.ActionCreatorsMapObject {
    addTodoViaThunk: Redux.ActionCreator<ICounterAction>
}


interface IFilterType {
    [name: string]: string;
}

export {ICounterAction, TodoState, TodosState, RootState, IFilterType};