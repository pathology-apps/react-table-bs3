import React from "react";
import { Header, HeaderGroup, RowData } from "@tanstack/table-core";
import FilteredHeaderCell from "./FilteredHeaderCell";

interface FilteredHeaderRowProps<T extends RowData> {
  filtering?: boolean;
  grouping?: boolean;
  headerGroup: HeaderGroup<T>;
}

function FilteredHeaderRow<T extends RowData>({
  filtering,
  grouping,
  headerGroup,
}: FilteredHeaderRowProps<T>) {
  return (
    <tr key={`${headerGroup.id}_filter`}>
      {headerGroup.headers.map((header: Header<T, unknown>) => (
        <FilteredHeaderCell
          filtering={filtering}
          grouping={grouping}
          header={header}
          key={`${header.id}_filterCell`}
        />
      ))}
    </tr>
  );
}

export default FilteredHeaderRow;
