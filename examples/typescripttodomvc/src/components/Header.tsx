import * as React from 'react';
import { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';

export default class Header extends Component<any, any> {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  handleSave(text: string) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className='header'>
          <h1>todos</h1>
          <TodoTextInput newTodo={true}
                         onSave={::this.handleSave}
                         placeholder='What needs to be done?' />
      </header>
    );
  }
}
