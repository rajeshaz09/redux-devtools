import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ActionTypes from './constants/ActionTypes'
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
//import ConfigureStore from './store/configureStore';
//import * as Root from './containers/Root';rm 

let Root: any = require('./containers/Root');
let RootContainer = Root.default;
const ConfigureStore: any = require('./store/configureStore');
const rootElement = document.getElementById('root')
const store = ConfigureStore.default();

const myRender = () => {
  Root = require('./containers/Root');
  RootContainer = Root.default;
  render(
    <AppContainer>
      <RootContainer
        store={ store }
        />
    </AppContainer>,
    rootElement
  );
};

if (module.hot) {
  myRender();
  module.hot.accept('./containers/Root', myRender);
} else {
  render(
    <RootContainer
      store={ store }
      />,
    rootElement
  )
}
