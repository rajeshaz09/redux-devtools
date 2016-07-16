import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/CounterActions';

class CounterApp extends React.Component<any, any> {
  render() {
    const { counter, dispatch } = this.props;
    return (
      <Counter counter={counter}
               {...bindActionCreators(CounterActions , dispatch)} />
    );
  }
}

function select(state: any) {
  return {
    counter: state.counter
  };
}

export default connect(select)(CounterApp);
