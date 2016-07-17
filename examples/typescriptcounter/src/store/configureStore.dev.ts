import { createStore, applyMiddleware, compose, Reducer } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import {RootReducer} from '../reducers';
import DevTools from '../containers/DevTools';
import {ICounterAction, RootState} from '../constants/interfaces';
import {DefaultRootState} from '../constants/defaults';

const enhancer = compose< Reducer<RootState>, any, any >(
  applyMiddleware(thunk),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

function ConfigureStore(initialState: RootState = DefaultRootState) {
  const store = createStore<RootState>(RootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const reducer : typeof RootReducer= (<any>require('../reducers')).RootReducer;
      
      return store.replaceReducer(reducer)
    });
  }

  return store;
}
export {ConfigureStore};