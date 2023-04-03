import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

function DebouncedInput({
    debounce = 500,
    onChange,
    value: initialValue,
    ...props
}) {
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value)
        }, debounce)

        return () => clearTimeout(timeout)
    }, [value])

    return (
        <input
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}

DebouncedInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    debounce: PropTypes.number,
}

export default DebouncedInput
