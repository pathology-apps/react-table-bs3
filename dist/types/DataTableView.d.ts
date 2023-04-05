import { RefObject, HTMLAttributes } from "react";
import { Table as ReactTable, RowData, Cell, Row } from "@tanstack/table-core";
interface DataTableViewProps<T extends RowData> {
    cellProps?: (cell: Cell<T, unknown>, row: Row<T>) => HTMLAttributes<HTMLTableCellElement>;
    filtering?: boolean;
    grouping?: boolean;
    loading?: boolean;
    loadingOffset?: number;
    pinning?: boolean;
    rowProps?: (row: Row<T>) => HTMLAttributes<HTMLTableRowElement>;
    sorting?: boolean;
    table: ReactTable<T>;
    tableProps?: (tableInstance: ReactTable<T>) => HTMLAttributes<HTMLTableElement>;
    viewRef?: RefObject<HTMLDivElement>;
}
declare function DataTableView<T extends RowData>({ cellProps, filtering, grouping, loading, loadingOffset, pinning, rowProps, sorting, table, tableProps, viewRef, }: DataTableViewProps<T>): JSX.Element;
export default DataTableView;
