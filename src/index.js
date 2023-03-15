import React from 'react'
import PropTypes from 'prop-types'
import DataHeader from './DataHeader'
import DataTableView from './DataTableView'
import DataFooter from './DataFooter'

function BootstrapTable({
    table,
    loading,
    loadingOffset,
    requestedPage,
    setRequestedPage,
    viewRef,
}) {
    return table ? (
        <div className="panel panel-default panel-table">
            <div className="panel-heading">
                <DataHeader table={table} />
            </div>
            <div className="panel-body">
                <DataTableView
                    table={table}
                    loading={loading}
                    loadingOffset={loadingOffset}
                    viewRef={viewRef}
                />
            </div>
            <div className="panel-footer">
                <DataFooter
                    table={table}
                    requestedPage={requestedPage}
                    setRequestedPage={setRequestedPage}
                    loading={loading}
                />
            </div>
        </div>
    ) : null
}

BootstrapTable.propTypes = {
    table: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    loadingOffset: PropTypes.number,
    requestedPage: PropTypes.number,
    setRequestedPage: PropTypes.func,
    viewRef: PropTypes.object,
}

export default BootstrapTable
