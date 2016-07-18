import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ActionTypes from './constants/ActionTypes'
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
//import ConfigureStore from './store/configureStore';
//import * as Root from './containers/Root';rm 

const Root: any = require('./containers/Root');
const RootContainer = Root.default;
const ConfigureStore: any = require('./store/configureStore');
const rootElement = document.getElementById('root')
const store = ConfigureStore.default();

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
    const container: any = require('./containers/Root');
    const RootContainer = container.default;
    render(
      <AppContainer>
        <RootContainer
          store={ store }
          />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
