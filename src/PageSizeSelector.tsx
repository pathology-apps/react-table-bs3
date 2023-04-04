import React from "react";
import { Table, RowData } from "@tanstack/table-core";

interface PageSizeSelectorProps<T extends RowData> {
  table: Table<T>;
}

const PageSizeSelector = <T extends RowData>({
  table,
}: PageSizeSelectorProps<T>) => {
  return (
    <select
      value={table.getState().pagination.pageSize}
      style={{
        width: "100px",
      }}
      onChange={e => {
        table.setPageSize(Number(e.target.value));
      }}
      className="form-control"
    >
      {[1, 3, 5, 10, 20, 30, 40, 50].map(pageSize => (
        <option key={pageSize} value={pageSize}>
          {pageSize} rows
        </option>
      ))}
    </select>
  );
};

export default PageSizeSelector;
