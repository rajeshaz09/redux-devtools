import { ADD_TODO, DELETE_TODO, EDIT_TODO, MARK_TODO, MARK_ALL, CLEAR_MARKED } from '../constants/ActionTypes';
import { DefaultTodosState } from '../constants/Defaults';
import { TodosState } from '../constants/Interfaces';

export default function todos(state:TodosState = DefaultTodosState, action: any) {
  switch (action.type) {
    case ADD_TODO:
      return [{
        id: (state.length === 0) ? 0 : state[0].id + 1,
        marked: false,
        text: action.text
      }, ...state];

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      );

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          Object.assign({}, todo, { text: action.text }) : todo
      );

    case MARK_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          Object.assign({}, todo, { marked: !todo.marked }) : todo
      );

    case MARK_ALL:
      const areAllMarked = state.every(todo => todo.marked);
      return state.map(todo => (
        Object.assign({}, todo, { marked: !areAllMarked })));

    case CLEAR_MARKED:
      return state.filter(todo => todo.marked === false);

    default:
      return state;
  }
}
