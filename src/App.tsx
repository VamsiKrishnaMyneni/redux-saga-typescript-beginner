import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Counter from './Counter';

function App() {
  const dispatch = useDispatch();
  const { name } = useSelector((state: any) => state);


  return (
    <div className="App">
      <h2> React app - {name}</h2>
      <button type='button' onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <Counter />
      <button type='button' onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}

export default App;
