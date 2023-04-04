import { RefObject, HTMLAttributes } from "react";
import { Table as ReactTable, RowData, Cell, Row } from "@tanstack/table-core";
interface DataTableViewProps<T extends RowData> {
    cellProps?: (cell: Cell<T, unknown>, row: Row<T>) => HTMLAttributes<HTMLTableCellElement>;
    loading?: boolean;
    loadingOffset?: number;
    rowProps?: (row: Row<T>) => HTMLAttributes<HTMLTableRowElement>;
    table: ReactTable<T>;
    tableProps?: (tableInstance: ReactTable<T>) => HTMLAttributes<HTMLTableElement>;
    viewRef?: RefObject<HTMLDivElement>;
}
declare function DataTableView<T extends RowData>({ cellProps, loading, loadingOffset, rowProps, table, tableProps, viewRef, }: DataTableViewProps<T>): JSX.Element;
export default DataTableView;
