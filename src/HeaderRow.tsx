import React from "react";
import { HeaderGroup, Table, Header, RowData } from "@tanstack/table-core";
import HeaderCell from "./HeaderCell";

interface HeaderRowProps<T extends RowData> {
  headerGroup: HeaderGroup<T>;
  pinning?: boolean;
  sorting?: boolean;
  table: Table<T>;
}

function HeaderRow<T extends RowData>({
  headerGroup,
  pinning,
  sorting,
  table,
}: HeaderRowProps<T>) {
  return (
    <tr>
      {headerGroup.headers.map((header: Header<T, unknown>) => (
        <HeaderCell
          header={header}
          key={`${header.id}_headerCell`}
          pinning={pinning}
          sorting={sorting}
          table={table}
        />
      ))}
    </tr>
  );
}

export default HeaderRow;
