/// <reference types="react" />
import { Table, RowData } from "@tanstack/table-core";
interface PageSizeSelectorProps<T extends RowData> {
    table: Table<T>;
}
declare const PageSizeSelector: <T extends unknown>({ table, }: PageSizeSelectorProps<T>) => JSX.Element;
export default PageSizeSelector;
