import {ActionCreator} from 'redux';
import * as types from '../constants/ActionTypes';
import {RootState, ITodoAction}  from '../constants/Interfaces';

export const addTodo: ActionCreator<RootState> = (text: string) => {
  return {
    type: types.ADD_TODO,
    text
  };
}

export const deleteTodo: ActionCreator<RootState> = (id: number) =>{
  return {
    type: types.DELETE_TODO,
    id
  };
}

export const editTodo: ActionCreator<RootState> = (id: number, text: string) =>{
  return {
    type: types.EDIT_TODO,
    id,
    text
  };
}

export const markTodo: ActionCreator<RootState> = (id: number)=> {
  return {
    type: types.MARK_TODO,
    id
  };
}

export const markAll: ActionCreator<RootState> = () =>{
  return {
    type: types.MARK_ALL
  };
}

export const clearMarked: ActionCreator<RootState> = () =>{
  return {
    type: types.CLEAR_MARKED
  };
}
