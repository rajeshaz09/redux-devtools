import {INCREMENT_COUNTER, DECREMENT_COUNTER}from '../constants/ActionTypes'
import {ICounterAction, CounterState} from '../constants/interfaces';
import {DefaultCounterState} from '../constants/defaults';

export default function counter(state: CounterState = DefaultCounterState, action: ICounterAction): CounterState {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}
