import React from 'react'
import PropTypes from 'prop-types'

function LoadingScreen({
    loading, 
    loadingOffset,
}) {
    if (!loading) {
        return null
    }

    const className = `loading ${loading ? 'progress' : ''}`

    return (
        <div
            className={className}
            style={{left: loadingOffset}}
        >
            <span>
                Loading
                <span className="one">.</span>
                <span className="two">.</span>
                <span className="three">.</span>
            </span>
        </div>
    )
}

LoadingScreen.propTypes = {
    loading: PropTypes.bool,
    loadingOffset: PropTypes.number,
}

export default LoadingScreen
