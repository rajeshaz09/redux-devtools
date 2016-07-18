import * as React from 'react';
import {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import {increment, decrement} from '../actions/CounterActions';
import {ICounterAction} from '../constants/interfaces';

class CounterApp extends Component<any, any> {
  render() {
    const { counter, dispatch } = this.props;
    return (
      <Counter 
        counter={counter} 
        increment = {() => { dispatch(increment())} } 
        decrement = {() => { dispatch(decrement())} } 
        />
    );
  }
}

function select(state: any) {
  return {
    counter: state.counter
  };
}

export default connect(select)(CounterApp);
