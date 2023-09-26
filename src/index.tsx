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
  tableStyle?: React.CSSProperties;
  viewRef?: RefObject<HTMLDivElement>;
}

function BootstrapTable<T extends RowData>({
  cellProps,
  filtering = true,
  footer = undefined,
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
  tableStyle,
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
        tableStyle={tableStyle}
        viewRef={viewRef}
      />
      {footer === undefined ? (
        <DataFooter
          loading={loading}
          requestedPage={requestedPage}
          setRequestedPage={setRequestedPage}
          table={table}
        />
      ) : (
        footer
      )}
    </>
  ) : null;
}

export { BootstrapTable, GroupingButton, tableFilter, valueFilter };
