import React from "react";
import { Header, HeaderGroup, RowData } from "@tanstack/table-core";
import FilteredHeaderCell from "./FilteredHeaderCell";

interface FilteredHeaderRowProps<T extends RowData> {
  headerGroup: HeaderGroup<T>;
}

function FilteredHeaderRow<T extends RowData>({
  headerGroup,
}: FilteredHeaderRowProps<T>) {
  return (
    <tr key={`${headerGroup.id}_filter`}>
      {headerGroup.headers.map((header: Header<T, unknown>) => (
        <FilteredHeaderCell<T>
          key={`${header.id}_filterCell`}
          header={header}
        />
      ))}
    </tr>
  );
}

export default FilteredHeaderRow;
