import React from "react";
import { Table, RowData } from "@tanstack/table-core";

interface NextButtonProps<T extends RowData> {
  loading?: boolean;
  table: Table<T>;
}

const NextButton = <T extends RowData>({
  loading = false,
  table,
}: NextButtonProps<T>) => {
  return (
    <button
      type="button"
      className={
        table.getCanNextPage() && !loading
          ? "btn btn-primary btn-block"
          : "btn btn-block disabled"
      }
      onClick={() => table.getCanNextPage() && table.nextPage()}
    >
      Next
    </button>
  );
};

export default NextButton;
