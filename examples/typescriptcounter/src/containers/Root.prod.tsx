import * as React from 'react';
import { Provider } from 'react-redux';
import CounterApp from './CounterApp';

class ProdRoot extends React.Component<any, any> {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}

export  {ProdRoot};