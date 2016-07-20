import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {RootState} from '../constants/interfaces';
import {DefaultRootState} from '../constants/defaults';


const rootReducer : any = require('../reducers');
const enhancer = applyMiddleware(thunk);

export default function ConfigureStore(initialState: RootState = DefaultRootState) {
  return createStore<RootState>(rootReducer.default, initialState, enhancer);
}