import React from 'react'
import PropTypes from 'prop-types'
import LoadingScreen from './LoadingScreen'
import Table from './Table'

function DataTableView({viewRef, loading, loadingOffset, table}) {
    return (
        <div
            ref={viewRef}
            style={{
                overflowX: loading ? 'hidden' : 'auto',
                position: 'relative',
            }}
        >
            <LoadingScreen loading={loading} loadingOffset={loadingOffset} />
            <Table table={table} />
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
