import * as React from 'react';
import { PropTypes, Component } from 'react';
import TodoItem from './TodoItem';
import Footer from './Footer';
import { TODO_FILTERS, SHOW_ALL, SHOW_MARKED, SHOW_UNMARKED } from '../constants/TodoFilters';
import { TodoState, TodosState, RootState, VisibilityState } from '../constants/Interfaces';

interface MainSectionProps{
  todos: TodosState,
  actions: any
}

export default class MainSection extends Component<MainSectionProps, RootState> {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor(props: any, context: any) {
    super(props, context);
    this.state = { filter: SHOW_ALL };
  }

  handleClearMarked() {
    const atLeastOneMarked = this.props.todos.some((todo: TodoState) => todo.marked);
    if (atLeastOneMarked) {
      this.props.actions.clearMarked();
    }
  }

  handleShow(filter: VisibilityState) {
    this.setState({ filter });
  }

  render() {
    const { todos, actions } = this.props;
    const { filter } = this.state;

    const filteredTodos = todos.filter(TODO_FILTERS[filter]);
    const markedCount = todos.reduce((count, todo) =>
      todo.marked ? count + 1 : count,
      0
    );

    return (
      <section className='main'>
        {this.renderToggleAll(markedCount) }
        <ul className='todo-list'>
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
          ) }
        </ul>
        {this.renderFooter(markedCount) }
      </section>
    );
  }

  renderToggleAll(markedCount: number) {
    const { todos, actions } = this.props;
    if (todos.length > 0) {
      return (
        <input className='toggle-all'
          type='checkbox'
          checked={markedCount === todos.length}
          onChange={actions.markAll} />
      );
    }
  }

  renderFooter(markedCount: number) {
    const { todos } = this.props;
    const { filter } = this.state;
    const unmarkedCount = todos.length - markedCount;

    if (todos.length) {
      return (
        <Footer markedCount={markedCount}
          unmarkedCount={unmarkedCount}
          filter={filter}
          onClearMarked={this.handleClearMarked.bind(this) }
          onShow={this.handleShow.bind(this) } />
      );
    }
  }
}
