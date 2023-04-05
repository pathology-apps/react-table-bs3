import React from "react";
import { RowData, Table } from "@tanstack/table-core";
import HeaderGroup from "./HeaderGroup";

interface TableHeadProps<T extends RowData> {
  filtering?: boolean;
  grouping?: boolean;
  pinning?: boolean;
  sorting?: boolean;
  table: Table<T>;
}

function TableHead<T extends RowData>({
  filtering,
  grouping,
  pinning,
  sorting,
  table,
}: TableHeadProps<T>) {
  return (
    <thead>
      {table.getHeaderGroups().map(headerGroup => (
        <HeaderGroup
          filtering={filtering}
          grouping={grouping}
          headerGroup={headerGroup}
          key={headerGroup.id}
          pinning={pinning}
          sorting={sorting}
          table={table}
        />
      ))}
    </thead>
  );
}

export default TableHead;
