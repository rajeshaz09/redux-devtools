import * as React from 'react';
import { PropTypes, Component } from 'react';
import * as classnames from 'classnames';

export default class TodoTextInput extends Component<any, any> {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  };

  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    };
  }

  handleSubmit(e: any) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  }

  handleChange(e: any) {
    this.setState({ text: e.target.value });
  }

  handleBlur(e: any) {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  }

  render() {
    return (
      <input className={classnames({
              edit: this.props.editing,
              'new-todo': this.props.newTodo
             })}
             type='text'
             placeholder={this.props.placeholder}
             autoFocus='true'
             value={this.state.text}
             onBlur={this.handleBlur.bind(this)}
             onChange={this.handleChange.bind(this)}
             onKeyDown={this.handleSubmit.bind(this)} />
    );
  }
}
