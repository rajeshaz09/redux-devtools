import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';

const store = configureStore();
const myRender = () => {
  const Root= require('./containers/Root').default;
  console.log('render root')
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
