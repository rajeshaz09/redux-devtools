import * as React from 'react';
import {Component} from 'react';
import { Provider } from 'react-redux';
import CounterApp from './CounterApp';

export default class ProdRoot extends Component<any, any> {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}