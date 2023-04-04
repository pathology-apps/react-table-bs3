import React from "react";
import { RowData, Table } from "@tanstack/react-table";
import HeaderGroup from "./HeaderGroup";

interface TableHeadProps<T extends RowData> {
  table: Table<T>;
}

function TableHead<T extends RowData>({ table }: TableHeadProps<T>) {
  return (
    <thead>
      {table.getHeaderGroups().map(headerGroup => (
        <HeaderGroup
          key={headerGroup.id}
          headerGroup={headerGroup}
          table={table}
        />
      ))}
    </thead>
  );
}

export default TableHead;
