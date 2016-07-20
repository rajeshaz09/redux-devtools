
import {TodoState, TodosState, RootState} from './Interfaces'

export const DefaultTodostate: TodoState = {
    text: 'Use Redux',
    marked: false,
    id: 0
};
export const DefaultTodosstate: TodosState = [DefaultTodostate];
export const DefaultVisibilitytate: string = '';
export const DefaultRootState: RootState = { todos: DefaultTodosstate, visibilityFilter: DefaultVisibilitytate };