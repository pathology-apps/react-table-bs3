import React from 'react'
import PropTypes from 'prop-types'
import TableCell from './TableCell'

function TableRow({
    cellProps,
    row, 
    rowProps,
}) {
    return (
        <tr {...rowProps(row)}>
            {row.getVisibleCells().map((cell) => (
                <TableCell 
                    key={`${cell.id}_tableCell`} 
                    cell={cell} 
                    cellProps={cellProps} 
                    row={row} 
                />
            ))}
        </tr>
    )
}

TableRow.propTypes = {
    row: PropTypes.object.isRequired,
}

export default TableRow
