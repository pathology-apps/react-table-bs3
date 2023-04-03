import React from 'react'
import PropTypes from 'prop-types'
import {tableFilter, valueFilter} from './Filters'
import DataFooter from './DataFooter'
import DataTableView from './DataTableView'
import GroupingButton from './GroupingButton'
import './index.css'

function BootstrapTable({
    loading,
    loadingOffset,
    requestedPage,
    rowProps,
    setRequestedPage,
    table,
    tableProps,
    viewRef,
}) {
    return table ? (
        <>
            <DataTableView
                table={table}
                loading={loading}
                loadingOffset={loadingOffset}
                viewRef={viewRef}
                rowProps={rowProps}
                tableProps={tableProps}
            />
            <DataFooter
                table={table}
                requestedPage={requestedPage}
                setRequestedPage={setRequestedPage}
                loading={loading}
            />
        </>
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

export { 
    tableFilter,
    valueFilter,
    GroupingButton,
}