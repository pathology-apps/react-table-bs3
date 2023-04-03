import React from 'react'
import PropTypes from 'prop-types'

function NextButton({
    loading,
    table, 
}) {
    // If loading is undefined, set it to false:
    loading = loading || false
    return (
        <button
            type="button"
            className={
                table.getCanNextPage() && loading === false
                    ? 'btn btn-primary btn-block'
                    : 'btn btn-block disabled'
            }
            onClick={() => table.getCanNextPage() && table.nextPage()}
        >
            Next
        </button>
    )
}

NextButton.propTypes = {
    table: PropTypes.object.isRequired,
    loading: PropTypes.bool,
}

export default NextButton
