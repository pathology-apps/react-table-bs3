import React from 'react'
import PropTypes from 'prop-types'
import DataTableView from './DataTableView'
import DataFooter from './DataFooter'
import GroupingButton from './GroupingButton'
import {tableFilter, valueFilter} from './Filters'
import './index.css'

function BootstrapTable({
    table,
    loading,
    loadingOffset,
    requestedPage,
    setRequestedPage,
    viewRef,
}) {
    return table ? (
        <>
            <DataTableView
                table={table}
                loading={loading}
                loadingOffset={loadingOffset}
                viewRef={viewRef}
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