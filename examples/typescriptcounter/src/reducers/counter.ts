import * as ActionTypes from '../constants/ActionTypes'
import {ICounterAction, CounterState} from '../constants/interfaces';
import {DefaultCounterState} from '../constants/defaults';

function CounterReducer (state: CounterState = DefaultCounterState, action: ICounterAction): CounterState  {
  switch (action.type) {
    case ActionTypes.INCREMENT_COUNTER:
      return state + 1;
    case ActionTypes.DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}

export {CounterReducer};
