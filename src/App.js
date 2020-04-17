import React from 'react';
import './App.css';
import Input from './components/Input';
import MyCompo from './components/MyCompo';



// import {useSelector, useDispatch} from 'react-redux';
// import {increment, decrement} from './actions';
// import incrementButton from "./incrementButton";
// import IncButton from './IncButton'

function App() {
  // const storeData = useSelector(state=>state);
  // const dispatch = useDispatch();


  return (
    <div className="App">
      <div className="login-container"> 
        <Input type = "text" label="Enter the Email">
        </Input>
        <Input type = "password" label="Enter the password"></Input>
         <Input type="button" value="Login" className="primary"></Input>
         <MyCompo>

         </MyCompo>
      </div>
        {/* <IncButton dispatch={dispatch}></IncButton>
        <h1>Counter {storeData.counter}</h1>
        {storeData.isLoggedIn?<h3>Valuable Information {}</h3>:''}
        <button onClick = {()=>{dispatch(increment(5))}}>
        +
        </button>    
        <button onClick = {()=>{dispatch(decrement())}}>
        -
        </button>   */}
       
        </div>
  );
}

export default App;
