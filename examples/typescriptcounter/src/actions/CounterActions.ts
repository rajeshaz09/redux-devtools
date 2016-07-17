import * as ActionTypes from '../constants/ActionTypes';

import {ICounterAction} from '../constants/interfaces';

const increment = (): ICounterAction => {
  return { type: ActionTypes.INCREMENT_COUNTER }
}
const decrement = (): ICounterAction => {
  return { type: ActionTypes.DECREMENT_COUNTER }
}

const incrementIfOdd = () => {
  return (dispatch: any, getState: any) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

function incrementAsync() {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}
export {increment, decrement, incrementIfOdd, incrementAsync};