import React from 'react'
import PropTypes from 'prop-types'
import TableRow from './TableRow'

function TableBody({table}) {
    const rowModel = table.getRowModel()
    if (!rowModel?.rows?.length) {
        return <tbody />
    }

    return (
        <tbody>
            {table.getRowModel().rows.map((row) => (
                <TableRow key={`${row.id}_tableRow`} row={row} />
            ))}
        </tbody>
    )
}

TableBody.propTypes = {
    table: PropTypes.object.isRequired,
}

export default TableBody
