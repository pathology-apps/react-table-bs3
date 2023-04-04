/// <reference types="react" />
import { Table, RowData } from "@tanstack/table-core";
interface DataFooterProps<T extends RowData> {
    loading?: boolean;
    requestedPage?: number;
    setRequestedPage?: (requestedPage: number) => void;
    table: Table<T>;
}
export default function DataFooter<T extends RowData>({ loading, requestedPage, setRequestedPage, table, }: DataFooterProps<T>): JSX.Element;
export {};
