import * as React from 'react';
import { PropTypes, Component } from 'react';
const classnames:any = require('classnames');
import { SHOW_ALL, SHOW_UNMARKED, SHOW_MARKED, FILTER_TITLES } from '../constants/TodoFilters';


export default class Footer extends Component<any, any> {
  static propTypes = {
    markedCount: PropTypes.number.isRequired,
    unmarkedCount: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    onClearMarked: PropTypes.func.isRequired,
    onShow: PropTypes.func.isRequired
  };

  render() {
    return (
      <footer className='footer'>
        {this.renderTodoCount()}
        <ul className='filters'>
          {[SHOW_ALL, SHOW_UNMARKED, SHOW_MARKED].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
        {this.renderClearButton()}
      </footer>
    );
  }

  renderTodoCount() {
    const { unmarkedCount } = this.props;
    const itemWord = unmarkedCount === 1 ? 'item' : 'items';

    return (
      <span className='todo-count'>
        <strong>{unmarkedCount || 'No'}</strong> {itemWord} left
      </span>
    );
  }

  renderFilterLink(filter: string) {
    const title = FILTER_TITLES[filter];
    const { filter: selectedFilter, onShow } = this.props;

    return (
      <a className={classnames({ selected: filter === selectedFilter })}
         style={{ cursor: 'hand' }}
         onClick={() => onShow(filter)}>
        {title}
      </a>
    );
  }

  renderClearButton() {
    const { markedCount, onClearMarked } = this.props;
    if (markedCount > 0) {
      return (
        <button className='clear-completed'
                onClick={onClearMarked} >
          Clear completed
        </button>
      );
    }
  }
}
