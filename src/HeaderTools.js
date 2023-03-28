import React from 'react'
import {useDrag, useDrop} from 'react-dnd'
import Unpin from './Unpin'

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
    children,
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
        <div ref={dragRef}>
            <div 
                ref={dropRef}
                colSpan={header.colSpan}
                style={{ opacity: isDragging ? 0.5 : 1, width: '100%' }}
                key={`${header.id}_headerCellPin`}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', overflow: 'hidden' }} ref={previewRef}>
                    {!header.isPlaceholder && header.column.getCanPin() && (
                        <>
                            {header.column.getIsPinned() !== 'left' ? (
                                <button
                                    className="btn btn-link btn-xs"
                                    style={{
                                        color: '#ddd',
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        header.column.pin('left')
                                    }}
                                >
                                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                </button>
                            ) : <Unpin header={header} />}
                            {children}
                            {header.column.getIsPinned() !== 'right' ? (
                                <button
                                    className="btn btn-link btn-xs"
                                    style={{
                                        color: '#ddd',
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        header.column.pin('right')
                                    }}
                                >
                                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                </button>
                            ) : <Unpin header={header} />}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}