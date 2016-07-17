import * as Redux from 'redux';
import {ICounterAction, RootState} from '../constants/interfaces';
import {ConfigureStore as DevStore} from './configureStore.dev';
import {ConfigureStore as ProdStore} from './configureStore.prod';

let ConfigureStore: (initialState?: RootState)=>Redux.Store<RootState>;
if (process.env.NODE_ENV === 'production') {
  ConfigureStore = ProdStore
} else {
  ConfigureStore = DevStore;
}
export {ConfigureStore};