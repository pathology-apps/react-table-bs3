import React from "react";
import { Row, RowData } from "@tanstack/table-core";

interface GroupingButtonProps<T extends RowData> {
  row: Row<T>;
}

function GroupingButton<T extends RowData>({
  row,
}: GroupingButtonProps<T>): JSX.Element {
  return (
    <button
      type="button"
      {...{
        onClick: row.getToggleExpandedHandler(),
        className: "btn btn-default",
        style: { cursor: "pointer" },
      }}
    >
      {row.getIsExpanded() ? (
        <span
          className="glyphicon glyphicon-remove-sign"
          aria-hidden="true"
        ></span>
      ) : (
        <span
          className="glyphicon glyphicon-duplicate"
          aria-hidden="true"
        ></span>
      )}
    </button>
  );
}

export default GroupingButton;
