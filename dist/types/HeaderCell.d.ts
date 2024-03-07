import React from "react";
import { Table, Header } from "@tanstack/table-core";
interface HeaderCellProps<T> {
    header: Header<T, unknown>;
    pinning?: boolean;
    sorting?: boolean;
    table: Table<T>;
}
declare function HeaderCell<T>({ header, pinning, sorting, table, }: HeaderCellProps<T>): React.JSX.Element;
export default HeaderCell;
