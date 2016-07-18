import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {RootReducer} from '../reducers';
import {RootState} from '../constants/interfaces';
import {DefaultRootState} from '../constants/defaults';

const enhancer = applyMiddleware(thunk);

function ConfigureStore(initialState: RootState = DefaultRootState) {
  return createStore<RootState>(RootReducer, initialState, enhancer);
}

export {ConfigureStore};