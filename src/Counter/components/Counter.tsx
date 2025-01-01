import { useDispatch } from 'react-redux';
import { counterActionTypes } from "../actions/counter.action"


interface CounterProps {
    count: number
}

function Counter(props: CounterProps) {
    const { count } = props
    const dispatch = useDispatch();

    return (
        <>
            <button onClick={() => dispatch(counterActionTypes.increment({ count: count + 1 }))}>+</button >
            <h1>{count}</h1>
            <button onClick={() => dispatch(counterActionTypes.decrement({ count: count - 1 }))}> -</button >
        </>
    )
}

export default Counter
