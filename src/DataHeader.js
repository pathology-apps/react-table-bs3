import React from 'react'
import PropTypes from 'prop-types'
import {flexRender} from '@tanstack/react-table'

function DataHeader({table}) {
    const headerGroups = table.getHeaderGroups()

    if (!headerGroups.length) {
        return null
    }

    return (
        <div className="row">
            {flexRender(
                headerGroups[0].headers[0].column?.columnDef.header,
                headerGroups[0].headers[0].getContext(),
            )}
        </div>
    )
}

DataHeader.propTypes = {
    table: PropTypes.object.isRequired,
}

export default DataHeader
