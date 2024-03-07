import React, { HTMLAttributes } from "react";
import { Table, RowData, Cell, Row } from "@tanstack/table-core";
interface TableBodyProps<T extends RowData> {
    cellProps?: (cell: Cell<T, unknown>, row: Row<T>) => HTMLAttributes<HTMLTableCellElement>;
    rowProps?: (row: Row<T>) => HTMLAttributes<HTMLTableRowElement>;
    table: Table<T>;
}
declare function TableBody<T extends RowData>({ cellProps, rowProps, table, }: TableBodyProps<T>): React.JSX.Element;
export default TableBody;
