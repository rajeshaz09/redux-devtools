import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();
const myRender = () => {
  console.log('render')
  render(
    <AppContainer>
      <Root
        store={ store }
        />
    </AppContainer>,
    document.getElementById('root')
  );
}

if (module.hot) {
  myRender();
  module.hot.accept('./containers/Root', myRender);
}
else {
  render(<Root store={ store }/>);
}
