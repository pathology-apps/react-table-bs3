import { HTMLAttributes } from "react";
import { Table, RowData, Cell, Row } from "@tanstack/table-core";
interface TableProps<T extends RowData> {
    cellProps?: (cell: Cell<T, unknown>, row: Row<T>) => HTMLAttributes<HTMLTableCellElement>;
    rowProps?: (row: Row<T>) => HTMLAttributes<HTMLTableRowElement>;
    table: Table<T>;
    tableProps?: (table: Table<T>) => HTMLAttributes<HTMLTableElement>;
}
declare function TableComponent<T extends RowData>({ cellProps, rowProps, table, tableProps, }: TableProps<T>): JSX.Element;
export default TableComponent;
