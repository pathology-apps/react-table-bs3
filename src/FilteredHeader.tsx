import React from "react";
import GroupedHeader from "./GroupedHeader";
import { Header, RowData } from "@tanstack/table-core";

interface FilteredHeaderProps<T extends RowData> {
  header: Header<T, unknown>;
}

function FilteredHeader<T extends RowData>({
  header,
}: FilteredHeaderProps<T>): JSX.Element {
  return header.column.getCanGroup() ? (
    <div className="input-group">
      <GroupedHeader header={header} />
    </div>
  ) : (
    <GroupedHeader header={header} />
  );
}

export default FilteredHeader;
