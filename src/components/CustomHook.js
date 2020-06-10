import React, {useState} from 'react'
import useCustomHook from './Hooks/useCustomHook'

function CustomHook() {
    const [count, setCount] = useState(0)

    useCustomHook(count)
    return (
        <div>
            <button onClick={() => setCount(count + 2)}>Value - {count}</button>
        </div>
    )
}

export default CustomHook
