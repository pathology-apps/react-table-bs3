import React from "react";
import DebouncedInput from "./DebouncedInput";
import { Column, RowData } from "@tanstack/table-core";

interface FilterProps<T extends RowData> {
  column: Column<T, unknown>;
}

function Filter<T extends RowData>({
  column,
}: FilterProps<T>): JSX.Element | null {
  const columnFilterValue = column.getFilterValue() as
    | string
    | number
    | readonly string[]
    | undefined;

  if (!column.getCanFilter()) {
    return null;
  }

  return (
    <DebouncedInput
      type="text"
      value={columnFilterValue ?? ""}
      onChange={value => column.setFilterValue(value)}
      className="form-control"
      style={{
        display: "block",
        width: "100%",
      }}
      list={`${column.id}_list`}
    />
  );
}

export default Filter;
