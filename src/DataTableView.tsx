import React, { RefObject, HTMLAttributes } from "react";
import { Table as ReactTable, RowData, Cell, Row } from "@tanstack/table-core";
import LoadingScreen from "./LoadingScreen";
import Table from "./Table";

interface DataTableViewProps<T extends RowData> {
  cellProps?: (
    cell: Cell<T, unknown>,
    row: Row<T>
  ) => HTMLAttributes<HTMLTableCellElement>;
  filtering?: boolean;
  grouping?: boolean;
  loading?: boolean;
  loadingOffset?: number;
  pinning?: boolean;
  rowProps?: (row: Row<T>) => HTMLAttributes<HTMLTableRowElement>;
  sorting?: boolean;
  table: ReactTable<T>;
  tableProps?: (
    tableInstance: ReactTable<T>
  ) => HTMLAttributes<HTMLTableElement>;
  tableStyle?: React.CSSProperties;
  viewRef?: RefObject<HTMLDivElement>;
}

function DataTableView<T extends RowData>({
  cellProps,
  filtering,
  grouping,
  loading,
  loadingOffset,
  pinning,
  rowProps,
  sorting,
  table,
  tableProps,
  tableStyle,
  viewRef,
}: DataTableViewProps<T>): JSX.Element {
  return (
    <div
      ref={viewRef}
      style={{
        overflowX: loading ? "hidden" : "auto",
        position: "relative",
        ...tableStyle,
      }}
    >
      <LoadingScreen loading={loading} loadingOffset={loadingOffset} />
      <Table
        cellProps={cellProps}
        filtering={filtering}
        grouping={grouping}
        pinning={pinning}
        rowProps={rowProps}
        sorting={sorting}
        table={table}
        tableProps={tableProps}
      />
    </div>
  );
}

export default DataTableView;
