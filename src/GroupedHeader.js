import React from 'react'
import PropTypes from 'prop-types'
import Filter from './Filter'

function GroupedHeader({header, table}) {
    return (
        <>
            <Filter column={header.column} table={table} />
            {header.column.getCanGroup() ? (
                <span className="input-group-btn">
                    <button
                        type="button"
                        {...{
                            className: 'btn btn-default',
                            onClick: header.column.getToggleGroupingHandler(),
                            style: {
                                cursor: 'pointer',
                            },
                        }}
                    >
                        {header.column.getIsGrouped() ? (
                            <span className="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>
                        ) : (
                            <span className="glyphicon glyphicon-duplicate" aria-hidden="true"></span>
                        )}
                    </button>
                </span>
            ) : null}
        </>
    )
}

GroupedHeader.propTypes = {
    header: PropTypes.object.isRequired,
    table: PropTypes.object.isRequired,
}

export default GroupedHeader
