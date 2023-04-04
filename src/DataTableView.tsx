import React, { RefObject, HTMLAttributes } from "react";
import { Table as ReactTable, RowData, Cell, Row } from "@tanstack/table-core";
import LoadingScreen from "./LoadingScreen";
import Table from "./Table";

interface DataTableViewProps<T extends RowData> {
  cellProps?: (
    cell: Cell<T, unknown>,
    row: Row<T>
  ) => HTMLAttributes<HTMLTableCellElement>;
  loading?: boolean;
  loadingOffset?: number;
  rowProps?: (row: Row<T>) => HTMLAttributes<HTMLTableRowElement>;
  table: ReactTable<T>;
  tableProps?: (
    tableInstance: ReactTable<T>
  ) => HTMLAttributes<HTMLTableElement>;
  viewRef?: RefObject<HTMLDivElement>;
}

function DataTableView<T extends RowData>({
  cellProps,
  loading,
  loadingOffset,
  rowProps,
  table,
  tableProps,
  viewRef,
}: DataTableViewProps<T>): JSX.Element {
  return (
    <div
      ref={viewRef}
      style={{
        overflowX: loading ? "hidden" : "auto",
        position: "relative",
      }}
    >
      <LoadingScreen loading={loading} loadingOffset={loadingOffset} />
      <Table
        cellProps={cellProps}
        rowProps={rowProps}
        table={table}
        tableProps={tableProps}
      />
    </div>
  );
}

export default DataTableView;
