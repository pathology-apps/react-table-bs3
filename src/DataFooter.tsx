import React from "react";
import { Table, RowData } from "@tanstack/table-core";
import NextButton from "./NextButton";
import PageSelector from "./PageSelector";
import PageSizeSelector from "./PageSizeSelector";
import PreviousButton from "./PreviousButton";

interface DataFooterProps<T extends RowData> {
  loading?: boolean;
  requestedPage?: number;
  setRequestedPage?: (requestedPage: number) => void;
  table: Table<T>;
}

export default function DataFooter<T extends RowData>({
  loading,
  requestedPage,
  setRequestedPage,
  table,
}: DataFooterProps<T>): JSX.Element {
  return (
    <div className="well well-sm">
      <div className="row">
        <div className="col col-xs-12">
          <div
            style={{
              display: "flex",
              gap: ".5em",
              justifyContent: "space-evenly",
            }}
          >
            <div style={{ display: "contents" }}>
              <PreviousButton table={table} loading={loading} />
            </div>
            <div
              style={{
                minWidth: "200px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <PageSelector
                table={table}
                requestedPage={requestedPage}
                setRequestedPage={setRequestedPage}
              />
            </div>
            <div
              style={{
                minWidth: "200px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <PageSizeSelector table={table} />
            </div>
            <div style={{ display: "contents" }}>
              <NextButton table={table} loading={loading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
