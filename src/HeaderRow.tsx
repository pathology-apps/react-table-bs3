import React from "react";
import { HeaderGroup, Table, Header, RowData } from "@tanstack/table-core";
import HeaderCell from "./HeaderCell";

interface HeaderRowProps<T extends RowData> {
  headerGroup: HeaderGroup<T>;
  table: Table<T>;
}

function HeaderRow<T extends RowData>({
  headerGroup,
  table,
}: HeaderRowProps<T>) {
  return (
    <tr>
      {headerGroup.headers.map((header: Header<T, unknown>) => (
        <HeaderCell
          key={`${header.id}_headerCell`}
          table={table}
          header={header}
        />
      ))}
    </tr>
  );
}

export default HeaderRow;
