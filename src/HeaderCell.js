import React from 'react'
import PropTypes from 'prop-types'
import HeaderTools from './HeaderTools'
import classNames from 'classnames'
import {flexRender} from '@tanstack/react-table'

function HeaderCell({table, header}) {
    return (
        <th
            {...{
                colSpan: header.colSpan,
                className: header.column.getCanSort()
                    ? classNames({
                          asc: header.column.getIsSorted() === 'asc',
                          desc: header.column.getIsSorted() === 'desc',
                          sortable: true,
                      })
                    : undefined,
                style: {
                    width: header.getSize(),
                    maxWidth: header.getSize(),
                    wordWrap: 'break-word',
                    position: 'relative',
                },
                onClick: header.column.getCanSort()
                    ? header.column.getToggleSortingHandler()
                    : undefined,
            }}
        >
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        display: 'inline-block',
                    }}
                >
                    {header.isPlaceholder
                        ? null
                        : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                          )}
                    <HeaderTools key={`${header.id}_headerTools`} table={table} header={header} />
                </div>
                <div
                    {...{
                        onClick: (e) => e.stopPropagation(),
                        onMouseDown: header.getResizeHandler(),
                        onTouchStart: header.getResizeHandler(),
                        className: `resizer ${
                            header.column.getIsResizing() ? 'isResizing' : ''
                        }`,
                    }}
                />
            </div>
        </th>
    )
}

HeaderCell.propTypes = {
    header: PropTypes.object.isRequired,
}

export default HeaderCell
