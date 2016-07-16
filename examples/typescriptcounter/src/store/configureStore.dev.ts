import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import {Counter} from '../reducers/counter';
import DevTools from '../containers/DevTools';

const enhancer = compose(
  applyMiddleware(thunk),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

export default function configureStore(initialState: any) {
  const store = createStore(Counter, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const {reducer} = require('../reducers/counter');
      return store.replaceReducer(reducer)
    });
  }

  return store;
}
