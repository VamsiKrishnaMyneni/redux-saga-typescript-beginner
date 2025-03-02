import { useSelector, useDispatch } from 'react-redux';
import Counter from './Counter';
import './App.css';
import Users from './components/Users';

function App() {
  const { count } = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "INCREMENT", count: count + 1 })}>+</button>
      <Counter count={count} />
      <button onClick={() => dispatch({ type: "DECREMENT", count: count - 1 })}>-</button>
      <Users />
    </div>
  );
}

export default App;
