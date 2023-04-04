/// <reference types="react" />
import { Table, RowData } from "@tanstack/table-core";
interface PreviousButtonProps<T extends RowData> {
    loading?: boolean;
    table: Table<T>;
}
declare const PreviousButton: <T extends unknown>({ loading, table, }: PreviousButtonProps<T>) => JSX.Element;
export default PreviousButton;
