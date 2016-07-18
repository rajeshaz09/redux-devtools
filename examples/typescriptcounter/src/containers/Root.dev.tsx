import * as React from 'react';
import { Component } from 'react';
import { Provider } from 'react-redux';
import CounterApp from './CounterApp';
import DevTools from './DevTools';

export default class DevRoot extends Component<any, any> {
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
