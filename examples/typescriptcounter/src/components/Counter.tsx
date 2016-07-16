
import * as React from 'react';

interface CounterProps{
  increment():void;

}

export default class Counter extends React.Component<any, any> {
  static propTypes = {
    increment: React.PropTypes.func.isRequired,
    incrementIfOdd: React.PropTypes.func.isRequired,
    decrement: React.PropTypes.func.isRequired,
    counter: React.PropTypes.number.isRequired
  };

  render() {
    const { increment, incrementIfOdd, decrement, counter } = this.props;
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
      </p>
    );
  }
}
