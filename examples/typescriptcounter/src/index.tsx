import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ActionTypes from './constants/ActionTypes'
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import {ConfigureStore} from './store/configureStore';
import {Root as RootContainer} from './containers/Root';


const rootElement = document.getElementById('root')

const store = ConfigureStore();

render(
  <AppContainer>
    <RootContainer
      store={ store }
      />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const Root: typeof RootContainer = require('./containers/Root');
    render(
      <AppContainer>
        <Root
          store={ store }
          />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
