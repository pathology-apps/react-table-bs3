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
                <i className="fa fa-fw fa-object-ungroup" />
            ) : (
                <i className="fa fa-fw fa-object-group" />
            )}
        </button>
    )
}

GroupingButton.propTypes = {
    row: PropTypes.object,
}

export default GroupingButton
