import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/TodoActions';
import {RootState, ITodoAction}  from '../constants/Interfaces';


class TodoApp extends Component<any, RootState> {
  render() {
    const { todos, actions } = this.props;

    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </div>
    );
  }
}

function mapState(state: RootState) {
  return {
    todos: state.todos
  };
}

function mapDispatch(dispatch: Dispatch<ITodoAction>) {
  return {
    actions: bindActionCreators<any>(TodoActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(TodoApp);
