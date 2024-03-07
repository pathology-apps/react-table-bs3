import React from "react";
import { Table, RowData } from "@tanstack/table-core";
interface PageSizeSelectorProps<T extends RowData> {
    table: Table<T>;
}
declare const PageSizeSelector: <T extends unknown>({ table, }: PageSizeSelectorProps<T>) => React.JSX.Element;
export default PageSizeSelector;
