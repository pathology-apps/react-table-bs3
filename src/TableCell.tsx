import React, { HTMLAttributes } from "react";
import { flexRender } from "@tanstack/react-table";
import { Cell, RowData, Row } from "@tanstack/table-core";

interface TableCellProps<T extends RowData> {
  cell: Cell<T, unknown>;
  cellProps?: (
    cell: Cell<T, unknown>,
    row: Row<T>
  ) => HTMLAttributes<HTMLTableCellElement>;
  row: Row<T>;
}

function TableCell<T extends RowData>({
  cell,
  cellProps,
  row,
}: TableCellProps<T>) {
  // For cells with repeated values, render null
  // Otherwise, just render the regular cell
  let cellRender = flexRender(cell.column.columnDef.cell, cell.getContext());

  if (cell.getIsGrouped()) {
    // If it's a grouped cell, add an expander and row count
    cellRender = (
      <button
        type="button"
        {...{
          onClick: row.getToggleExpandedHandler(),
          style: {
            cursor: row.getCanExpand() ? "pointer" : "normal",
          },
        }}
      >
        {flexRender(cell.column.columnDef.cell, cell.getContext())}
        &nbsp; ({row.subRows.length})
      </button>
    );
  }

  if (cell.getIsAggregated()) {
    // If the cell is aggregated, use the Aggregated
    // renderer for cell
    cellRender = flexRender(
      cell.column.columnDef.aggregatedCell ?? cell.column.columnDef.cell,
      cell.getContext()
    );
  }

  return (
    <td
      {...{
        style: {
          width: cell.column.getSize(),
          maxWidth: cell.column.getSize(),
          wordWrap: "break-word",
          color: "#444",
        },
        ...(cellProps?.(cell, row) ?? {}),
      }}
    >
      {cellRender}
    </td>
  );
}

export default TableCell;
