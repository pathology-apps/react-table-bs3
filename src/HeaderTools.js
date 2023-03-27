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
        <div 
            ref={dropRef}
            colSpan={header.colSpan}
            style={{ opacity: isDragging ? 0.5 : 1, display: 'flex', justifyContent: 'center' }}
            key={`${header.id}_headerCellPin`}
        >
            <div ref={previewRef}>
                {!header.isPlaceholder && header.column.getCanPin() && (
                    <div className="btn-group btn-group-outline">
                        {header.column.getIsPinned() !== 'left' ? (
                            <button
                                className="btn btn-link btn-primary btn-xs"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    header.column.pin('left')
                                }}
                            >
                                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            </button>
                        ) : null}
                        {header.column.getIsPinned() ? (
                            <button
                                className="btn btn-link btn-danger btn-xs"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    header.column.pin(false)
                                }}
                            >
                                <span className="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>
                            </button>
                        ) : (
                            <button 
                                className="btn btn-link btn-primary btn-xs" 
                                onClick={(e) => {
                                    e.stopPropagation()
                                }} 
                                ref={dragRef}
                            >
                                <span className="glyphicon glyphicon-align-justify" aria-hidden="true"></span>
                            </button>
                        )}
                        {header.column.getIsPinned() !== 'right' ? (
                            <button
                                className="btn btn-link btn-primary btn-xs"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    header.column.pin('right')
                                }}
                            >
                                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            </button>
                        ) : null}
                    </div>
                )}
            </div>
        </div>
    )
}