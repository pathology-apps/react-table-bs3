import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

function PageSelector({
    requestedPage, 
    setRequestedPage,
    table, 
}) {
    // requestedPage and setRequestedPage might be undefined if the table is not paginated on the server, so we need to make local state to track the [requestedPage, setRequestedPage] state.
    const [localRequestedPage, setLocalRequestedPage] = useState(1)

    // If requestedPage is undefined, we use the localRequestedPage state.
    const finalRequestedPage =
        requestedPage === undefined ? localRequestedPage : requestedPage

    // If setRequestedPage is undefined, we use the setLocalRequestedPage function.
    const finalSetRequestedPage =
        setRequestedPage === undefined
            ? setLocalRequestedPage
            : setRequestedPage

    useEffect(() => {
        setLocalRequestedPage(table.getState().pagination.pageIndex + 1)
    }, [table.getState().pagination.pageIndex])

    return (
        <span>
            Page{' '}
            <input
                type="number"
                value={finalRequestedPage}
                onKeyDown={(e) => {
                    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
                        const page = e.target.value
                            ? Number(e.target.value) - 1
                            : 0
                        table.setPageIndex(parseInt(page, 10))
                    }
                }}
                onChange={(e) => finalSetRequestedPage(e.target.value)}
                style={{
                    width: '75px',
                    display: 'inline-block',
                }}
                className="form-control"
            />{' '}
            of {table.getPageCount()}
        </span>
    )
}

PageSelector.propTypes = {
    requestedPage: PropTypes.number,
    table: PropTypes.object.isRequired,
    setRequestedPage: PropTypes.func,
}

export default PageSelector
