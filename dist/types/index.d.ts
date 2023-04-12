import React, { RefObject, HTMLAttributes } from "react";
import { Table, RowData, Cell, Row } from "@tanstack/table-core";
import { tableFilter, valueFilter } from "./Filters/index";
import GroupingButton from "./GroupingButton";
import "./index.css";
export interface BootstrapTableProps<T extends RowData> {
    cellProps?: (cell: Cell<T, unknown>, row: Row<T>) => HTMLAttributes<HTMLTableCellElement>;
    filtering?: boolean;
    footer?: React.ReactNode | null;
    grouping?: boolean;
    loading?: boolean;
    loadingOffset?: number;
    pinning?: boolean;
    requestedPage?: number;
    rowProps?: (row: Row<T>) => HTMLAttributes<HTMLTableRowElement>;
    setRequestedPage?: (requestedPage: number) => void;
    sorting?: boolean;
    table: Table<T>;
    tableProps?: (tableInstance: Table<T>) => HTMLAttributes<HTMLTableElement>;
    viewRef?: RefObject<HTMLDivElement>;
}
declare function BootstrapTable<T extends RowData>({ cellProps, filtering, footer, grouping, loading, loadingOffset, pinning, requestedPage, rowProps, setRequestedPage, sorting, table, tableProps, viewRef, }: BootstrapTableProps<T>): JSX.Element | null;
export { BootstrapTable, GroupingButton, tableFilter, valueFilter };
