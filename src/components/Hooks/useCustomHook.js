import {useEffect} from 'react'

function useCustomHook(count) {
    useEffect(() => {
        document.title = `Custom Value ${count}`
    })
}

export default useCustomHook
