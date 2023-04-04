import React, { HTMLAttributes } from "react";
import { Row, Cell, RowData } from "@tanstack/react-table";
import TableCell from "./TableCell";

interface TableRowProps<T extends RowData> {
  cellProps?: (
    cell: Cell<T, unknown>,
    row: Row<T>
  ) => HTMLAttributes<HTMLTableCellElement>;
  row: Row<T>;
  rowProps?: (row: Row<T>) => HTMLAttributes<HTMLTableRowElement>;
}

function TableRow<T extends RowData>({
  cellProps,
  row,
  rowProps,
}: TableRowProps<T>) {
  return (
    <tr {...(rowProps?.(row) ?? {})}>
      {row.getVisibleCells().map(cell => (
        <TableCell
          key={`${cell.id}_tableCell`}
          cell={cell}
          cellProps={cellProps}
          row={row}
        />
      ))}
    </tr>
  );
}

export default TableRow;
