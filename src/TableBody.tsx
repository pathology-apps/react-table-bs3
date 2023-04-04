import React, { HTMLAttributes } from "react";
import { Table, RowData, Cell, Row } from "@tanstack/table-core";
import TableRow from "./TableRow";

interface TableBodyProps<T extends RowData> {
  cellProps?: (
    cell: Cell<T, unknown>,
    row: Row<T>
  ) => HTMLAttributes<HTMLTableCellElement>;
  rowProps?: (row: Row<T>) => HTMLAttributes<HTMLTableRowElement>;
  table: Table<T>;
}

function TableBody<T extends RowData>({
  cellProps,
  rowProps,
  table,
}: TableBodyProps<T>) {
  const rowModel = table.getRowModel();
  if (!rowModel?.rows?.length) {
    return <tbody />;
  }

  return (
    <tbody>
      {table.getRowModel().rows.map(row => (
        <TableRow
          key={`${row.id}_tableRow`}
          cellProps={cellProps}
          row={row}
          rowProps={rowProps}
        />
      ))}
    </tbody>
  );
}

export default TableBody;
