import React from 'react'
import useCounter from './Hooks/useCounter'

function Counter2() {
    const [count, increase, decrease, reset] = useCounter()
    return (
        <div>
            <h3>Value - {count}</h3>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter2
