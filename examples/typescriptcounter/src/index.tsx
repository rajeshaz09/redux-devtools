import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ActionTypes from './constants/ActionTypes'
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import {ConfigureStore} from './store/configureStore';
import {Root} from './containers/Root';


const rootElement = document.getElementById('root')

const store = ConfigureStore();

render(
  <AppContainer>
    <Root
      store={ store }
      />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const RootContainer: any = require('./containers/Root');
    render(
      <AppContainer>
        <RootContainer.Root
          store={ store }
          />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
