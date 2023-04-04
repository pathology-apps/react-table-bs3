import React from "react";
import FilteredHeader from "./FilteredHeader";
import { Header, RowData } from "@tanstack/table-core";

interface FilteredHeaderCellProps<T extends RowData> {
  header: Header<T, unknown>;
}

function FilteredHeaderCell<T extends RowData>({
  header,
}: FilteredHeaderCellProps<T>) {
  return (
    <th
      {...{
        colSpan: header.colSpan,
        style: {
          width: header.getSize(),
          maxWidth: header.getSize(),
          wordWrap: "break-word",
          position: "relative",
        },
      }}
    >
      {header.column.getCanFilter() ? (
        <FilteredHeader<T> header={header} />
      ) : null}
    </th>
  );
}

export default FilteredHeaderCell;
