import {useState} from 'react'

function useCounter() {
    const [count, setCount] = useState(0)
    const increase = () => {
        setCount(prevValue => prevValue + 1)
    }
    const decrease = () => {
        setCount(prevValue => prevValue - 1)
    }
    const reset = () => {
        setCount(0)
    }
    return [count,increase, decrease, reset]
}

export default useCounter
