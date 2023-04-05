import React, { RefObject, HTMLAttributes } from "react";
import { Table, RowData, Cell, Row } from "@tanstack/table-core";
import { tableFilter, valueFilter } from "./Filters/index";
import DataFooter from "./DataFooter";
import DataTableView from "./DataTableView";
import GroupingButton from "./GroupingButton";
import "./index.css";

export interface BootstrapTableProps<T extends RowData> {
  cellProps?: (
    cell: Cell<T, unknown>,
    row: Row<T>
  ) => HTMLAttributes<HTMLTableCellElement>;
  // Allow user to disable pinning, sorting, filtering, and grouping:
  pinning?: boolean;
  sorting?: boolean;
  filtering?: boolean;
  grouping?: boolean;
  loading?: boolean;
  loadingOffset?: number;
  requestedPage?: number;
  rowProps?: (row: Row<T>) => HTMLAttributes<HTMLTableRowElement>;
  setRequestedPage?: (requestedPage: number) => void;
  table: Table<T>;
  tableProps?: (tableInstance: Table<T>) => HTMLAttributes<HTMLTableElement>;
  viewRef?: RefObject<HTMLDivElement>;
}

function BootstrapTable<T extends RowData>({
  cellProps,
  filtering = true,
  grouping = true,
  loading,
  loadingOffset,
  pinning = true,
  requestedPage,
  rowProps,
  setRequestedPage,
  sorting = true,
  table,
  tableProps,
  viewRef,
}: BootstrapTableProps<T>): JSX.Element | null {
  return table ? (
    <>
      <DataTableView
        cellProps={cellProps}
        filtering={filtering}
        grouping={grouping}
        loading={loading}
        loadingOffset={loadingOffset}
        pinning={pinning}
        rowProps={rowProps}
        sorting={sorting}
        table={table}
        tableProps={tableProps}
        viewRef={viewRef}
      />
      <DataFooter
        loading={loading}
        requestedPage={requestedPage}
        setRequestedPage={setRequestedPage}
        table={table}
      />
    </>
  ) : null;
}

export { BootstrapTable, GroupingButton, tableFilter, valueFilter };
