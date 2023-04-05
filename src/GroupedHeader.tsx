import React from "react";
import { Header, RowData } from "@tanstack/table-core";
import Filter from "./Filter";

interface GroupedHeaderProps<T extends RowData> {
  filtering?: boolean;
  grouping?: boolean;
  header: Header<T, unknown>;
}

function GroupedHeader<T extends RowData>({
  filtering,
  grouping,
  header,
}: GroupedHeaderProps<T>): JSX.Element {
  const { column } = header;
  return (
    <>
      {filtering && <Filter column={column} />}
      {grouping && column.getCanGroup() ? (
        <span className="input-group-btn">
          <button
            type="button"
            {...{
              className: "btn btn-default",
              onClick: column.getToggleGroupingHandler(),
              style: {
                cursor: "pointer",
              },
            }}
          >
            {column.getIsGrouped() ? (
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
        </span>
      ) : null}
    </>
  );
}

export default GroupedHeader;
