import React from 'react'
import PropTypes from 'prop-types'
import LoadingScreen from './LoadingScreen'
import Table from './Table'

function DataTableView({
    cellProps,
    loading, 
    loadingOffset, 
    rowProps,
    table, 
    tableProps,
    viewRef, 
}) {
    return (
        <div
            ref={viewRef}
            style={{
                overflowX: loading ? 'hidden' : 'auto',
                position: 'relative',
            }}
        >
            <LoadingScreen loading={loading} loadingOffset={loadingOffset} />
            <Table 
                cellProps={cellProps}
                rowProps={rowProps} 
                table={table} 
                tableProps={tableProps} 
            />
        </div>
    )
}

DataTableView.propTypes = {
    viewRef: PropTypes.object,
    loading: PropTypes.bool,
    loadingOffset: PropTypes.number,
    table: PropTypes.object.isRequired,
}

export default DataTableView
