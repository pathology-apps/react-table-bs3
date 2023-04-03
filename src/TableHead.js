import React from 'react'
import PropTypes from 'prop-types'
import HeaderGroup from './HeaderGroup'

function TableHead({
    table,
}) {
    return (
        <thead>
            {table.getHeaderGroups().map((headerGroup) => (
                <HeaderGroup
                    key={headerGroup.id}
                    headerGroup={headerGroup}
                    table={table}
                />
            ))}
        </thead>
    )
}

TableHead.propTypes = {
    table: PropTypes.object.isRequired,
}

export default TableHead
