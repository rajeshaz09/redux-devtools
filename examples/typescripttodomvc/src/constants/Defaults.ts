
import {TodoState, TodosState, RootState, VisibilityState} from './Interfaces'

export const DefaultTodostate: TodoState = {
    text: 'Use Redux',
    marked: false,
    id: 0
};
export const DefaultTodosState: TodosState = [DefaultTodostate];
export const DefaultFilterState: VisibilityState = '';
export const DefaultRootState: RootState = { todos: DefaultTodosState};