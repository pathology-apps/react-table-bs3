/// <reference types="react" />
import { HeaderGroup, Table, RowData } from "@tanstack/table-core";
interface HeaderRowProps<T extends RowData> {
    headerGroup: HeaderGroup<T>;
    table: Table<T>;
}
declare function HeaderRow<T extends RowData>({ headerGroup, table, }: HeaderRowProps<T>): JSX.Element;
export default HeaderRow;
