import { useCallback, useState } from 'react'

function useInput(
    defaultValue: string,
) {
    const [value, setValue] = useState(defaultValue)
    const onChange = useCallback(
        (e: any) => {
            const str = e.target.value
            setValue(str)
        },
        []
    )
    const setValueStr = (str: any) => {
        setValue(str)
    }
    return {
        value,
        onChange,
        setValueStr,
    }
}

export default useInput
