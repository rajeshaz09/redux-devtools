import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import {RootReducer as Reducer} from '../reducers';
import DevTools from '../containers/DevTools';
import {ICounterAction, RootState} from '../constants/interfaces';
import {DefaultRootState} from '../constants/defaults';

const enhancer = compose<RootState, {}, ICounterAction>(
  applyMiddleware(thunk),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

function ConfigureStore(initialState: RootState = DefaultRootState) {
  const store = createStore<RootState>(Reducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const reducer : typeof Reducer= (<any>require('../reducers')).RootReducer;
      
      return store.replaceReducer(reducer)
    });
  }

  return store;
}
export {ConfigureStore};