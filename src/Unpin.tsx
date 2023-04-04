import React from "react";
import { Header, RowData } from "@tanstack/react-table";

interface UnpinProps<T extends RowData> {
  header: Header<T, unknown>;
}

export default function Unpin<T extends RowData>({ header }: UnpinProps<T>) {
  return (
    <button
      className="btn btn-link btn-xs"
      onClick={e => {
        e.stopPropagation();
        header.column.pin(false);
      }}
    >
      <span
        style={{
          color: "#337ab7",
        }}
        className="glyphicon glyphicon-pushpin"
        aria-hidden="true"
      ></span>
    </button>
  );
}
