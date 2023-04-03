import React from 'react'
import PropTypes from 'prop-types'
import FilteredHeaderRow from './FilteredHeaderRow'
import HeaderRow from './HeaderRow'

function HeaderGroup({
    headerGroup, 
    table,
}) {
    return (
        <>
            <HeaderRow 
                headerGroup={headerGroup}
                table={table}
            />
            <FilteredHeaderRow headerGroup={headerGroup} table={table} />
        </>
    )
}

HeaderGroup.propTypes = {
    headerGroup: PropTypes.object.isRequired,
    table: PropTypes.object.isRequired,
}

export default HeaderGroup
