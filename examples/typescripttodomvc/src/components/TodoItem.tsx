import * as React from 'react';
import {Component, PropTypes } from 'react';
import * as classnames from 'classnames';
import TodoTextInput from './TodoTextInput';

export default class TodoItem extends Component<any, any> {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    markTodo: PropTypes.func.isRequired
  };

  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  handleDoubleClick() {
    this.setState({ editing: true });
  }

  handleSave(id: number, text: string) {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({ editing: false });
  }

  render() {
    const {todo, markTodo, deleteTodo} = this.props;

    let element: any;
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
          editing={this.state.editing}
          onSave={(text: string) => this.handleSave(todo.id, text) } />
      );
    } else {
      element = (
        <div className='view'>
          <input className='toggle'
            type='checkbox'
            checked={todo.marked}
            onChange={() => markTodo(todo.id) } />
          <label onDoubleClick={this.handleDoubleClick.bind(this) }>
            {todo.text}
          </label>
          <button className='destroy'
            onClick={() => deleteTodo(todo.id) } />
        </div>
      );
    }

    return (
      <li className={classnames({
        completed: todo.marked,
        editing: this.state.editing
      }) }>
        {element}
      </li>
    );
  }
}
