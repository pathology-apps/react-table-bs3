import React from 'react'
import PropTypes from 'prop-types'
import DebouncedInput from './DebouncedInput'

function Filter({column}) {
    const columnFilterValue = column.getFilterValue()

    if (!column.getCanFilter()) {
        return null
    }

    return (
        <DebouncedInput
            type="text"
            value={columnFilterValue ?? ''}
            onChange={(value) => column.setFilterValue(value)}
            className="form-control"
            style={{
                display: 'block',
                width: '100%',
            }}
            list={`${column.id}_list`}
        />
    )
}

Filter.propTypes = {
    column: PropTypes.object.isRequired,
}

export default Filter
