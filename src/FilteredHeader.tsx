import React from "react";
import GroupedHeader from "./GroupedHeader";
import { Header, RowData } from "@tanstack/table-core";

interface FilteredHeaderProps<T extends RowData> {
  filtering?: boolean;
  grouping?: boolean;
  header: Header<T, unknown>;
}

function FilteredHeader<T extends RowData>({
  filtering,
  grouping,
  header,
}: FilteredHeaderProps<T>): JSX.Element {
  return grouping && header.column.getCanGroup() ? (
    <div className="input-group">
      <GroupedHeader
        filtering={filtering}
        grouping={grouping}
        header={header}
      />
    </div>
  ) : (
    <GroupedHeader filtering={filtering} grouping={grouping} header={header} />
  );
}

export default FilteredHeader;
