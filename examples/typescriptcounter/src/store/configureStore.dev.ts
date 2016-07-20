import * as React from 'react';
import { createStore, applyMiddleware, compose, Reducer } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import DevTools from '../containers/DevTools';
import {RootState} from '../constants/interfaces';
import {DefaultRootState} from '../constants/defaults';


const reducer : any = require('../reducers');
const rootReducer = reducer.default;

const enhancer = compose< Reducer<RootState>, any, any >(
  applyMiddleware(thunk),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

export default function ConfigureStore(initialState: RootState = DefaultRootState) {
  const store = createStore<RootState>(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const reducer : any = require('../reducers');
      return store.replaceReducer(reducer.default)
    });
  }

  return store;
}