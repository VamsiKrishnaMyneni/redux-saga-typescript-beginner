import React from 'react'
import { useSelector } from 'react-redux';

interface Props { }

function Counter(props: Props) {
    const { counter } = useSelector((state: any) => state);
    return (
        <p>counter:  {counter}</p>
    )
}

export default Counter
