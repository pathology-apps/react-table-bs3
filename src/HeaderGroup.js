import React from 'react'
import PropTypes from 'prop-types'
import HeaderRow from './HeaderRow'
import FilteredHeaderRow from './FilteredHeaderRow'

function HeaderGroup({headerGroup, table}) {
    return headerGroup.id !== '0' ? (
        <>
            <HeaderRow 
                headerGroup={headerGroup}
                table={table}
            />
            <FilteredHeaderRow headerGroup={headerGroup} table={table} />
        </>
    ) : null
}

HeaderGroup.propTypes = {
    headerGroup: PropTypes.object.isRequired,
    table: PropTypes.object.isRequired,
}

export default HeaderGroup
