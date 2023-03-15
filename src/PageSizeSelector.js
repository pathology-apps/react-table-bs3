import React from 'react'
import PropTypes from 'prop-types'

function PageSizeSelector({table}) {
    return (
        <select
            value={table.getState().pagination.pageSize}
            style={{
                width: '100px',
            }}
            onChange={(e) => {
                table.setPageSize(Number(e.target.value))
            }}
            className="form-control"
        >
            {[1, 3, 5, 10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                    {pageSize} rows
                </option>
            ))}
        </select>
    )
}

PageSizeSelector.propTypes = {
    table: PropTypes.object.isRequired,
}

export default PageSizeSelector
