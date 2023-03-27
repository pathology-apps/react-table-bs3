import React from 'react'
import PropTypes from 'prop-types'

function GroupingButton({row}) {
    return (
        <button
            type="button"
            {...{
                onClick: row.getToggleExpandedHandler(),
                className: 'btn btn-default',
                style: {cursor: 'pointer'},
            }}
        >
            {row.getIsExpanded() ? (
                <span className="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>
            ) : (
                <span className="glyphicon glyphicon-duplicate" aria-hidden="true"></span>
            )}
        </button>
    )
}

GroupingButton.propTypes = {
    row: PropTypes.object,
}

export default GroupingButton
