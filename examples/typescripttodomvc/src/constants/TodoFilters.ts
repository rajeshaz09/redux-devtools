import { IFilterType, TodoState, ITodoFilters } from './Interfaces';

export const SHOW_ALL = 'show_all';
export const SHOW_MARKED = 'show_marked';
export const SHOW_UNMARKED = 'show_unmarked';

export const FILTER_TITLES: IFilterType = {
  [SHOW_ALL]: 'All',
  [SHOW_UNMARKED]: 'Active',
  [SHOW_MARKED]: 'Completed'
};

export const TODO_FILTERS: ITodoFilters = {
  [SHOW_ALL]: () => true,
  [SHOW_UNMARKED]: (todo: TodoState) => !todo.marked,
  [SHOW_MARKED]: (todo: TodoState) => todo.marked
};
