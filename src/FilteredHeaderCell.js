import React from 'react'
import PropTypes from 'prop-types'
import FilteredHeader from './FilteredHeader'

function FilteredHeaderCell({
    header, 
    table,
}) {
    return (
        <th
            {...{
                colSpan: header.colSpan,
                style: {
                    width: header.getSize(),
                    maxWidth: header.getSize(),
                    wordWrap: 'break-word',
                    position: 'relative',
                },
            }}
        >
            {header.column.getCanFilter() ? (
                <FilteredHeader header={header} table={table} />
            ) : null}
        </th>
    )
}

FilteredHeaderCell.propTypes = {
    header: PropTypes.object.isRequired,
    table: PropTypes.object.isRequired,
}

export default FilteredHeaderCell
