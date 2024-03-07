import React from "react";
import { Table, RowData } from "@tanstack/table-core";
interface NextButtonProps<T extends RowData> {
    loading?: boolean;
    table: Table<T>;
}
declare const NextButton: <T extends unknown>({ loading, table, }: NextButtonProps<T>) => React.JSX.Element;
export default NextButton;
