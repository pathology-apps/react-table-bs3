import React from "react";
import { Table, RowData } from "@tanstack/table-core";

interface PreviousButtonProps<T extends RowData> {
  loading?: boolean;
  table: Table<T>;
}

const PreviousButton = <T extends RowData>({
  loading = false,
  table,
}: PreviousButtonProps<T>) => {
  return (
    <button
      type="button"
      className={
        table.getCanPreviousPage() && !loading
          ? "btn btn-primary btn-block"
          : "btn btn-block disabled"
      }
      onClick={() => table.getCanPreviousPage() && table.previousPage()}
    >
      Previous
    </button>
  );
};

export default PreviousButton;
