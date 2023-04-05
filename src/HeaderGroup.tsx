import React from "react";
import { Table, HeaderGroup as CoreHeaderGroup } from "@tanstack/table-core";
import FilteredHeaderRow from "./FilteredHeaderRow";
import HeaderRow from "./HeaderRow";

interface HeaderGroupProps<T> {
  filtering?: boolean;
  grouping?: boolean;
  headerGroup: CoreHeaderGroup<T>;
  pinning?: boolean;
  sorting?: boolean;
  table: Table<T>;
}

function HeaderGroup<T>({
  filtering,
  grouping,
  headerGroup,
  pinning,
  sorting,
  table,
}: HeaderGroupProps<T>) {
  return (
    <>
      <HeaderRow
        headerGroup={headerGroup}
        pinning={pinning}
        sorting={sorting}
        table={table}
      />
      {(filtering || grouping) && (
        <FilteredHeaderRow
          filtering={filtering}
          grouping={grouping}
          headerGroup={headerGroup}
        />
      )}
    </>
  );
}

export default HeaderGroup;
