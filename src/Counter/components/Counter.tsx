import React from 'react'

interface CounterProps {
    count: number
}

function Counter(props: CounterProps) {
    const { count } = props

    return (
        <h1>{count}</h1>
    )
}

export default Counter
