import React from 'react'
import PropTypes from 'prop-types'
import {tableFilter, valueFilter} from './Filters'
import DataFooter from './DataFooter'
import DataTableView from './DataTableView'
import GroupingButton from './GroupingButton'
import './index.css'

function BootstrapTable({
    cellProps = () => {},
    loading,
    loadingOffset,
    requestedPage,
    rowProps = () => {},
    setRequestedPage,
    table,
    tableProps = () => {},
    viewRef,
}) {
    return table ? (
        <>
            <DataTableView
                cellProps={cellProps}
                loading={loading}
                loadingOffset={loadingOffset}
                rowProps={rowProps}
                table={table}
                tableProps={tableProps}
                viewRef={viewRef}
            />
            <DataFooter
                loading={loading}
                requestedPage={requestedPage}
                setRequestedPage={setRequestedPage}
                table={table}
            />
        </>
    ) : null
}

BootstrapTable.propTypes = {
    loading: PropTypes.bool,
    loadingOffset: PropTypes.number,
    requestedPage: PropTypes.number,
    setRequestedPage: PropTypes.func,
    table: PropTypes.object.isRequired,
    viewRef: PropTypes.object,
}

export default BootstrapTable

export { 
    GroupingButton,
    tableFilter,
    valueFilter,
}