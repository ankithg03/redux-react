import {combineReducers} from 'redux';
import isLoggedReducer from './isLogged';
import counterResducer from './counter';


const combinationOfReducers =  combineReducers({
    counter: counterResducer,
    isLogged : isLoggedReducer
});

export default combinationOfReducers;