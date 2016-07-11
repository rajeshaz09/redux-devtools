import 'todomvc-app-css/index.css';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

render(
  <AppContainer>
    <Root
<<<<<<< HEAD
      store={store}
=======
      store={ store }
>>>>>>> gaearon/master
    />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const RootContainer = require('./containers/Root').default;
    render(
      <AppContainer>
<<<<<<< HEAD
        <Root
<<<<<<< HEAD
          store={store}
=======
=======
        <RootContainer
>>>>>>> master
          store={ store }
>>>>>>> gaearon/master
        />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
