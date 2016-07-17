import * as Redux from 'redux';
import {ICounterAction, RootState} from '../constants/interfaces';
import {ConfigureStore as DevStore} from './configureStore.dev';
import {ConfigureStore as ProdStore} from './configureStore.prod';

const configure = () => {
  if (process.env.NODE_ENV === 'production') {
    return ProdStore
  } else {
    return  DevStore;
  }
}


let ConfigureStore: (initialState?: RootState) => Redux.Store<RootState> = configure();

export {ConfigureStore};