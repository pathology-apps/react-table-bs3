import React, { ReactNode } from "react";
import { useDrag, useDrop } from "react-dnd";
import Unpin from "./Unpin";
import {
  Table,
  Column,
  Header,
  ColumnPinningPosition,
} from "@tanstack/table-core";

interface HeaderToolsProps<T> {
  children: ReactNode;
  header: Header<T, unknown>;
  pinning?: boolean;
  table: Table<T>;
}

const reorderColumn = (
  draggedColumnId: string,
  targetColumnId: string,
  columnOrder: string[]
): string[] => {
  columnOrder.splice(
    columnOrder.indexOf(targetColumnId),
    0,
    columnOrder.splice(columnOrder.indexOf(draggedColumnId), 1)[0]
  );
  return [...columnOrder];
};

function HeaderTools<T>({
  children,
  header,
  pinning,
  table,
}: HeaderToolsProps<T>) {
  const { getState, setColumnOrder } = table;
  let { columnOrder } = getState();
  if (!columnOrder.length) {
    columnOrder = table.getAllColumns().map(c => c.id);
  }
  const { column } = header;

  const [, dropRef] = useDrop({
    accept: "column",
    drop: (draggedColumn: Column<object>) => {
      const newColumnOrder = reorderColumn(
        draggedColumn.id,
        column.id,
        columnOrder
      );
      setColumnOrder(newColumnOrder);
    },
  });

  const [{ isDragging }, dragRef, previewRef] = useDrag({
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
    item: () => column,
    type: "column",
  });

  const renderPin = (
    column: Column<T>,
    header: Header<T, unknown>,
    position: ColumnPinningPosition
  ) => {
    if (!pinning) return null;
    return column.getIsPinned() !== position ? (
      <button
        className="btn btn-link btn-xs"
        style={{
          color: "#ddd",
        }}
        onClick={e => {
          e.stopPropagation();
          column.pin(position);
        }}
      >
        <span
          className={`glyphicon glyphicon-chevron-${position}`}
          aria-hidden="true"
        ></span>
      </button>
    ) : (
      <Unpin header={header} />
    );
  };

  return (
    <div ref={dragRef}>
      <div
        ref={dropRef}
        style={{ opacity: isDragging ? 0.5 : 1, width: "100%" }}
        key={`${header.id} _headerCellPin`}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
          ref={previewRef}
        >
          {!header.isPlaceholder && column.getCanPin() && (
            <>
              {renderPin(column, header, "left")}
              {children}
              {renderPin(column, header, "right")}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderTools;
