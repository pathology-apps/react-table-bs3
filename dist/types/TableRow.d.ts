import { HTMLAttributes } from "react";
import { Row, Cell, RowData } from "@tanstack/table-core";
interface TableRowProps<T extends RowData> {
    cellProps?: (cell: Cell<T, unknown>, row: Row<T>) => HTMLAttributes<HTMLTableCellElement>;
    row: Row<T>;
    rowProps?: (row: Row<T>) => HTMLAttributes<HTMLTableRowElement>;
}
declare function TableRow<T extends RowData>({ cellProps, row, rowProps, }: TableRowProps<T>): JSX.Element;
export default TableRow;
