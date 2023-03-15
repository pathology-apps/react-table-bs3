import React from 'react'
import PropTypes from 'prop-types'
import HeaderCell from './HeaderCell'
import HeaderTools from './HeaderTools'

function HeaderRow({ headerGroup, table }) {

    return (
        <>
            <tr>
                {headerGroup.headers.map((header) => (
                    <HeaderCell key={`${header.id}_headerCell`} header={header} />
                ))}
            </tr>
            <tr>
                {headerGroup.headers.map((header) => (
                    <HeaderTools key={`${header.id}_headerTools`} table={table} header={header} />
                ))}
            </tr>
        </>
    )
}

HeaderRow.propTypes = {
    headerGroup: PropTypes.object.isRequired,
}

export default HeaderRow
