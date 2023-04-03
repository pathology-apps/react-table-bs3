import React from 'react'
import PropTypes from 'prop-types'
import FilteredHeaderCell from './FilteredHeaderCell'

function FilteredHeaderRow({
    headerGroup, 
    table,
}) {
    return (
        <tr key={`${headerGroup.i}_filter`}>
            {headerGroup.headers.map((header) => (
                <FilteredHeaderCell
                    key={`${header.id}_filterCell`}
                    header={header}
                    table={table}
                />
            ))}
        </tr>
    )
}

FilteredHeaderRow.propTypes = {
    headerGroup: PropTypes.object.isRequired,
    table: PropTypes.object.isRequired,
}

export default FilteredHeaderRow
