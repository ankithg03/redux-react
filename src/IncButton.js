import React, { Component } from 'react';
// import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';

class IncButton extends Component {
  
    render() {
        const dispatch = this.props.dispatch;
        console.log(this.props.dispatch)
        return (
            <div>
                <button  onClick = {()=>{dispatch(increment(5))}}>
                {/* <button> */}
                    ada
                </button>
            </div>
        );
    }
}

export default IncButton;