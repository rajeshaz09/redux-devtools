import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ActionTypes from './constants/ActionTypes'
const rootElement =  document.getElementById('root')
const inc =  ActionTypes.INCREMENT_COUNTER;
ReactDOM.render(
    <div>
        inc
    </div>
    , rootElement);