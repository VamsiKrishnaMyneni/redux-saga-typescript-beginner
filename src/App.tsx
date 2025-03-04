import { useSelector } from 'react-redux';
import Counter from './Counter/components/Counter';
import Users from './Users/components/Users';
import './App.css';

function App() {
  const { count } = useSelector((state: any) => state.counter);

  return (
    <div className="App">

      <Counter count={count} />

      <Users />
    </div>
  );
}

export default App;
