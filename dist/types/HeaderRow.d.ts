import React from "react";
import { HeaderGroup, Table, RowData } from "@tanstack/table-core";
interface HeaderRowProps<T extends RowData> {
    headerGroup: HeaderGroup<T>;
    pinning?: boolean;
    sorting?: boolean;
    table: Table<T>;
}
declare function HeaderRow<T extends RowData>({ headerGroup, pinning, sorting, table, }: HeaderRowProps<T>): React.JSX.Element;
export default HeaderRow;
