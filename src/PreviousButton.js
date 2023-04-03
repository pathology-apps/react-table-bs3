import React from 'react'
import PropTypes from 'prop-types'

function PreviousButton({
    loading,
    table, 
}) {
    // If loading is undefined, set it to false:
    loading = loading || false
    return (
        <button
            type="button"
            className={
                table.getCanPreviousPage() && loading === false
                    ? 'btn btn-primary btn-block'
                    : 'btn btn-block disabled'
            }
            onClick={() => table.getCanPreviousPage() && table.previousPage()}
        >
            Previous
        </button>
    )
}

PreviousButton.propTypes = {
    table: PropTypes.object.isRequired,
    loading: PropTypes.bool,
}

export default PreviousButton
