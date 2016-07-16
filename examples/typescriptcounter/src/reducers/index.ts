import { combineReducers } from 'redux';
import {CounterReducer} from './counter';

const RootReducer = combineReducers({
  counter: CounterReducer
});

export {RootReducer};
