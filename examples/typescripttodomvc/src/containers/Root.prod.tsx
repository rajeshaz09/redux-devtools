import * as React from 'react';
import { Component } from 'react';
import { Provider } from 'react-redux';
import TodoApp from './TodoApp';

export default class Root extends Component<any, any> {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}
