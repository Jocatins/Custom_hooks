import React, {useState} from 'react'
import useCustomHook from './Hooks/useCustomHook'

function CustomHook1() {
    const [count, setCount] = useState(0)

    useCustomHook(count)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Value - {count}</button>
        </div>
    )
}

export default CustomHook1
