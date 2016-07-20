import { createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';
import rootReducer from '../reducers/index';
import DevTools from '../containers/DevTools';
import { DefaultRootState } from '../constants/Defaults';
import { RootState } from '../constants/Interfaces';

const enhancer = compose<any, any>(
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

export default function configureStore(initialState: RootState = DefaultRootState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>{
      const reducer : any = require('../reducers');
      return store.replaceReducer(reducer.default)}
    );
  }

  return store;
}
