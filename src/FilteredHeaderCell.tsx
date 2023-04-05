import React from "react";
import FilteredHeader from "./FilteredHeader";
import { Header, RowData } from "@tanstack/table-core";

interface FilteredHeaderCellProps<T extends RowData> {
  filtering?: boolean;
  grouping?: boolean;
  header: Header<T, unknown>;
}

function FilteredHeaderCell<T extends RowData>({
  filtering,
  grouping,
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
        <FilteredHeader
          filtering={filtering}
          grouping={grouping}
          header={header}
        />
      ) : null}
    </th>
  );
}

export default FilteredHeaderCell;
