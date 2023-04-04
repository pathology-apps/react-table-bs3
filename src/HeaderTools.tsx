import React, { ReactNode } from "react";
import { useDrag, useDrop } from "react-dnd";
import Unpin from "./Unpin";
import { Table, Column, Header } from "@tanstack/table-core";

interface HeaderToolsProps<T> {
  children: ReactNode;
  header: Header<T, unknown>;
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

function HeaderTools<T>({ children, header, table }: HeaderToolsProps<T>) {
  const { getState, setColumnOrder } = table;
  const { columnOrder } = getState();
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
              {column.getIsPinned() !== "left" ? (
                <button
                  className="btn btn-link btn-xs"
                  style={{
                    color: "#ddd",
                  }}
                  onClick={e => {
                    e.stopPropagation();
                    column.pin("left");
                  }}
                >
                  <span
                    className="glyphicon glyphicon-chevron-left"
                    aria-hidden="true"
                  ></span>
                </button>
              ) : (
                <Unpin header={header} />
              )}
              {children}
              {column.getIsPinned() !== "right" ? (
                <button
                  className="btn btn-link btn-xs"
                  style={{
                    color: "#ddd",
                  }}
                  onClick={e => {
                    e.stopPropagation();
                    column.pin("right");
                  }}
                >
                  <span
                    className="glyphicon glyphicon-chevron-right"
                    aria-hidden="true"
                  ></span>
                </button>
              ) : (
                <Unpin header={header} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderTools;
