/// <reference types="react" />
import { Table, RowData } from "@tanstack/table-core";
interface PageSelectorProps<T extends RowData> {
    requestedPage?: number;
    setRequestedPage?: (page: number) => void;
    table: Table<T>;
}
declare const PageSelector: <T extends unknown>({ requestedPage, setRequestedPage, table, }: PageSelectorProps<T>) => JSX.Element;
export default PageSelector;
