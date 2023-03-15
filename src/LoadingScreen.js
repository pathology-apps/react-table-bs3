import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

function LoadingScreen({loading, loadingOffset}) {
    if (!loading) {
        return null
    }

    return (
        <div
            className={classNames({
                loading: true,
                progress: loading,
            })}
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
