import React from 'react'
import PropTypes from 'prop-types'
import HeaderCell from './HeaderCell'

function HeaderRow({ 
    headerGroup, 
    table,
}) {

    return (
        <tr>
            {headerGroup.headers.map((header) => (
                <HeaderCell key={`${header.id}_headerCell`} table={table} header={header} />
            ))}
        </tr>
    )
}

HeaderRow.propTypes = {
    headerGroup: PropTypes.object.isRequired,
}

export default HeaderRow
