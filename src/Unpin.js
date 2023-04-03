
import React from 'react'

export default function Unpin({
    header,
}) {
    return (
        <button
            className="btn btn-link btn-xs"
            onClick={(e) => {
                e.stopPropagation()
                header.column.pin(false)
            }}
        >
            <span 
                style={{
                    color: '#337ab7',
                }} 
                className="glyphicon glyphicon-pushpin" 
                aria-hidden="true"
            ></span>
        </button>
    )
}