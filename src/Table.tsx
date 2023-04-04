import React, { HTMLAttributes } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Table, RowData, Cell, Row } from "@tanstack/table-core";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

interface TableProps<T extends RowData> {
  cellProps?: (
    cell: Cell<T, unknown>,
    row: Row<T>
  ) => HTMLAttributes<HTMLTableCellElement>;
  rowProps?: (row: Row<T>) => HTMLAttributes<HTMLTableRowElement>;
  table: Table<T>;
  tableProps?: (table: Table<T>) => HTMLAttributes<HTMLTableElement>;
}

function TableComponent<T extends RowData>({
  cellProps,
  rowProps,
  table,
  tableProps,
}: TableProps<T>) {
  return (
    <DndProvider backend={HTML5Backend}>
      <table
        {...{
          className: "react-table-bs3 table table-condensed table-bordered",
          ...(tableProps?.(table) ?? {}),
        }}
      >
        <TableHead table={table} />
        <TableBody table={table} cellProps={cellProps} rowProps={rowProps} />
      </table>
    </DndProvider>
  );
}

export default TableComponent;
