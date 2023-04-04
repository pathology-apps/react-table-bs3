/// <reference types="react" />
import { Column, RowData } from "@tanstack/table-core";
interface FilterProps<T extends RowData> {
    column: Column<T, unknown>;
}
declare function Filter<T extends RowData>({ column, }: FilterProps<T>): JSX.Element | null;
export default Filter;
