import React from 'react'
import PropTypes from 'prop-types'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import TableBody from './TableBody'
import TableHead from './TableHead'

function Table({
    rowProps, 
    table, 
    tableProps,
}) {
    return (
        <DndProvider backend={HTML5Backend}>
            <table
                {...{
                    className: "react-table-bs3 table table-condensed table-bordered",
                    ...tableProps(table),
                }}
            >
                <TableHead table={table} />
                <TableBody table={table} rowProps={rowProps} />
            </table>
        </DndProvider>
    )
}

Table.propTypes = {
    table: PropTypes.object.isRequired,
}

export default Table
