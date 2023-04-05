import React from "react";
import { flexRender } from "@tanstack/react-table";
import HeaderTools from "./HeaderTools";
import { Table, Header } from "@tanstack/table-core";

interface HeaderCellProps<T> {
  header: Header<T, unknown>;
  pinning?: boolean;
  sorting?: boolean;
  table: Table<T>;
}

function HeaderCell<T>({
  header,
  pinning,
  sorting,
  table,
}: HeaderCellProps<T>) {
  const className = sorting ? `${header.column.getIsSorted()} sortable` : "";

  return (
    <th
      {...{
        colSpan: header.colSpan,
        className:
          sorting && header.column.getCanSort() ? className : undefined,
        style: {
          width: header.getSize(),
          maxWidth: header.getSize(),
          wordWrap: "break-word",
          position: "relative",
        },
        onClick:
          sorting && header.column.getCanSort()
            ? header.column.getToggleSortingHandler()
            : undefined,
      }}
    >
      <HeaderTools
        header={header}
        key={`${header.id}_headerTools`}
        pinning={pinning}
        table={table}
      >
        {header.isPlaceholder
          ? null
          : flexRender(header.column.columnDef.header, header.getContext())}
      </HeaderTools>
      <div
        {...{
          onClick: e => e.stopPropagation(),
          onMouseDown: header.getResizeHandler(),
          onTouchStart: header.getResizeHandler(),
          className: `resizer ${
            header.column.getIsResizing() ? "isResizing" : ""
          }`,
        }}
      />
    </th>
  );
}

export default HeaderCell;
