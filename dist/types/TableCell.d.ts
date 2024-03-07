import React, { HTMLAttributes } from "react";
import { Cell, RowData, Row } from "@tanstack/table-core";
interface TableCellProps<T extends RowData> {
    cell: Cell<T, unknown>;
    cellProps?: (cell: Cell<T, unknown>, row: Row<T>) => HTMLAttributes<HTMLTableCellElement>;
    row: Row<T>;
}
declare function TableCell<T extends RowData>({ cell, cellProps, row, }: TableCellProps<T>): React.JSX.Element;
export default TableCell;
