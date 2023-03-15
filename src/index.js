import React from 'react'
import PropTypes from 'prop-types'
import TableHead from './TableHead'
import TableBody from './TableBody'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function Table({table}) {
    return (
        <DndProvider backend={HTML5Backend}>
            <table
                className="table table-condensed table-bordered"
                {...{
                    style: {
                        minWidth: '100%',
                        width: table.getCenterTotalSize(),
                        tableLayout: 'fixed',
                    },
                }}
            >
                <TableHead table={table} />
                <TableBody table={table} />
            </table>
        </DndProvider>
    )
}

Table.propTypes = {
    table: PropTypes.object.isRequired,
}

export default Table
