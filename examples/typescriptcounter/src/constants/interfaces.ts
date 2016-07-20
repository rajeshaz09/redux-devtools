import * as Redux from 'redux';

interface ICounterAction extends Redux.Action {
    type: string;
}

type CounterState = number;
interface RootState  {
    counter: CounterState;
}


interface ActionCreatersMap extends Redux.ActionCreatorsMapObject {
  addTodoViaThunk: Redux.ActionCreator<ICounterAction>
}

export {ICounterAction, CounterState, RootState};