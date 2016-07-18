import { combineReducers } from 'redux';
import {CounterReducer} from './counter';
import {RootState} from '../constants/interfaces';

const RootReducer = combineReducers<RootState>({
  counter: CounterReducer
});

export {RootReducer};