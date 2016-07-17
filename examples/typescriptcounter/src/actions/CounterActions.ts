import {ActionCreator} from 'redux'

import * as ActionTypes from '../constants/ActionTypes';
import {ICounterAction} from '../constants/interfaces';


const increment: ActionCreator<ICounterAction> = () => {
  return { type: ActionTypes.INCREMENT_COUNTER }
}
const decrement: ActionCreator<ICounterAction> = () => {
  return { type: ActionTypes.DECREMENT_COUNTER }
}
/*
const incrementIfOdd : ActionCreator<ICounterAction> = () => {
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
*/
export {increment, decrement};//, incrementIfOdd, incrementAsync};