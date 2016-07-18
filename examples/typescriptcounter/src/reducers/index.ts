import { combineReducers } from 'redux';
import counter from './counter';
import {RootState} from '../constants/interfaces';

const RootReducer = combineReducers<RootState>({
  counter
});

export default RootReducer;