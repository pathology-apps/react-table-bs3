import React from 'react'
import {useDrag, useDrop} from 'react-dnd'

const reorderColumn = (
  draggedColumnId,
  targetColumnId,
  columnOrder,
) => {
  columnOrder.splice(
    columnOrder.indexOf(targetColumnId),
    0,
    columnOrder.splice(columnOrder.indexOf(draggedColumnId), 1)[0]
  )
  return [...columnOrder]
}

export default function HeaderTools({
    header,
    table,
}) {
    const { getState, setColumnOrder } = table
    const { columnOrder } = getState()
    const { column } = header

    const [, dropRef] = useDrop({
    accept: 'column',
    drop: (draggedColumn) => {
        const newColumnOrder = reorderColumn(
            draggedColumn.id,
            column.id,
            columnOrder
        )
        setColumnOrder(newColumnOrder)
    },
    })

    const [{ isDragging }, dragRef, previewRef] = useDrag({
    collect: monitor => ({
        isDragging: monitor.isDragging(),
    }),
    item: () => column,
        type: 'column',
    })

    return (
        <th 
            ref={dropRef}
            colSpan={header.colSpan}
            style={{ opacity: isDragging ? 0.5 : 1 }}
            key={`${header.id}_headerCellPin`}
        >
            <div ref={previewRef}>
                {!header.isPlaceholder && header.column.getCanPin() && (
                    <div className="btn-group btn-group-outline">
                        {header.column.getIsPinned() !== 'left' ? (
                            <button
                                className="btn btn-primary btn-xs"
                                onClick={() => {
                                    header.column.pin('left')
                                }}
                            >
                                <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
                            </button>
                        ) : null}
                        {header.column.getIsPinned() ? (
                            <button
                                className="btn btn-danger btn-xs"
                                onClick={() => {
                                    header.column.pin(false)
                                }}
                            >
                                <i className="fa fa-times-circle" aria-hidden="true"></i>
                            </button>
                        ) : (
                            <button className="btn btn-primary btn-xs" ref={dragRef}>
                                <i className="fa fa-bars" aria-hidden="true"></i>
                            </button>
                        )}
                        {header.column.getIsPinned() !== 'right' ? (
                            <button
                                className="btn btn-primary btn-xs"
                                onClick={() => {
                                    header.column.pin('right')
                                }}
                            >
                                <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
                            </button>
                        ) : null}
                    </div>
                )}
            </div>
        </th>
    )
}