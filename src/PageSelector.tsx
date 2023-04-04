import React, { useEffect, useState } from "react";
import { Table, RowData } from "@tanstack/table-core";

interface PageSelectorProps<T extends RowData> {
  requestedPage?: number;
  setRequestedPage?: (page: number) => void;
  table: Table<T>;
}

const PageSelector = <T extends RowData>({
  requestedPage,
  setRequestedPage,
  table,
}: PageSelectorProps<T>) => {
  const [localRequestedPage, setLocalRequestedPage] = useState(1);

  const finalRequestedPage =
    requestedPage === undefined ? localRequestedPage : requestedPage;

  const finalSetRequestedPage =
    setRequestedPage === undefined ? setLocalRequestedPage : setRequestedPage;

  useEffect(() => {
    setLocalRequestedPage(table.getState().pagination.pageIndex + 1);
  }, [table.getState().pagination.pageIndex]);

  return (
    <span>
      Page{" "}
      <input
        type="number"
        value={finalRequestedPage}
        onKeyDown={e => {
          if (e.code === "Enter" || e.code === "NumpadEnter") {
            const page = (e.target as HTMLInputElement).value
              ? Number((e.target as HTMLInputElement).value) - 1
              : 0;
            table.setPageIndex(parseInt(page.toString(), 10));
          }
        }}
        onChange={e =>
          finalSetRequestedPage(Number((e.target as HTMLInputElement).value))
        }
        style={{
          width: "75px",
          display: "inline-block",
        }}
        className="form-control"
      />{" "}
      of {table.getPageCount()}
    </span>
  );
};

export default PageSelector;
