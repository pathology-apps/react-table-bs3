import React, { HTMLAttributes } from "react";
import { Table, RowData, Cell, Row } from "@tanstack/table-core";
interface TableProps<T extends RowData> {
    cellProps?: (cell: Cell<T, unknown>, row: Row<T>) => HTMLAttributes<HTMLTableCellElement>;
    pinning?: boolean;
    sorting?: boolean;
    filtering?: boolean;
    grouping?: boolean;
    rowProps?: (row: Row<T>) => HTMLAttributes<HTMLTableRowElement>;
    table: Table<T>;
    tableProps?: (table: Table<T>) => HTMLAttributes<HTMLTableElement>;
}
declare function TableComponent<T extends RowData>({ cellProps, filtering, grouping, pinning, rowProps, sorting, table, tableProps, }: TableProps<T>): React.JSX.Element;
export default TableComponent;
