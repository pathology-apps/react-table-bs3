import React from 'react'
import PropTypes from 'prop-types'
import GroupedHeader from './GroupedHeader'

function FilteredHeader({header, table}) {
    return header.column.getCanGroup() ? (
        <div className="input-group">
            <GroupedHeader header={header} table={table} />
        </div>
    ) : (
        <GroupedHeader header={header} table={table} />
    )
}

FilteredHeader.propTypes = {
    header: PropTypes.object.isRequired,
    table: PropTypes.object.isRequired,
}

export default FilteredHeader
