import React from "react";
import { Table, HeaderGroup as CoreHeaderGroup } from "@tanstack/table-core";
import FilteredHeaderRow from "./FilteredHeaderRow";
import HeaderRow from "./HeaderRow";

interface HeaderGroupProps<T> {
  headerGroup: CoreHeaderGroup<T>;
  table: Table<T>;
}

function HeaderGroup<T>({ headerGroup, table }: HeaderGroupProps<T>) {
  return (
    <>
      <HeaderRow headerGroup={headerGroup} table={table} />
      <FilteredHeaderRow headerGroup={headerGroup} />
    </>
  );
}

export default HeaderGroup;
