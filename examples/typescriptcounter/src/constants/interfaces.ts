import * as Redux from 'redux';

interface ICounterAction extends Redux.Action {
    type: string;
}
type CounterState = number;
type RootState = {
    counter: CounterState;
}
export {ICounterAction, CounterState, RootState};