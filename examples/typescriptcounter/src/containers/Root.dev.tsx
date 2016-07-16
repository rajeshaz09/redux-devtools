import * as React from 'react';
import { Provider } from 'react-redux';
import CounterApp from './CounterApp';
import DevTools from './DevTools';

class DevRoot extends React.Component<any, any> {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <CounterApp />
          <DevTools />
        </div>
      </Provider>
    );
  }
}

export {DevRoot};