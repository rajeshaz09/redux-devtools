import * as ActionTypes from '../constants/ActionTypes'

export default function counter(state = 0, action: any) {
  switch (action.type) {
  case ActionTypes.INCREMENT_COUNTER:
    return state + 1;
  case ActionTypes.DECREMENT_COUNTER:
    return state - 1;
  default:
    return state;
  }
}
