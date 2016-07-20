import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import { DefaultRootState } from '../constants/Defaults';
import { RootState } from '../constants/Interfaces';

export default function configureStore(initialState: RootState) {
  return createStore(rootReducer, initialState);
}
