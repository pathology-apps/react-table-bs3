import React from 'react'
import NextButton from './NextButton'
import PageSelector from './PageSelector'
import PageSizeSelector from './PageSizeSelector'
import PreviousButton from './PreviousButton'
import PropTypes from 'prop-types'

function DataFooter({
    loading, 
    requestedPage, 
    setRequestedPage,
    table, 
}) {
    return (
        <div className="well well-sm">
            <div className="row">
                <div className="col col-xs-12">
                    <div
                        style={{
                            display: 'flex',
                            gap: '.5em',
                            justifyContent: 'space-evenly',
                        }}
                    >
                        <div style={{display: 'contents'}}>
                            <PreviousButton table={table} loading={loading} />
                        </div>
                        <div
                            style={{
                                minWidth: '200px',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <PageSelector
                                table={table}
                                requestedPage={requestedPage}
                                setRequestedPage={setRequestedPage}
                            />
                        </div>
                        <div
                            style={{
                                minWidth: '200px',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <PageSizeSelector table={table} />
                        </div>
                        <div style={{display: 'contents'}}>
                            <NextButton table={table} loading={loading} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

DataFooter.propTypes = {
    table: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    requestedPage: PropTypes.number,
    setRequestedPage: PropTypes.func,
}

export default DataFooter
