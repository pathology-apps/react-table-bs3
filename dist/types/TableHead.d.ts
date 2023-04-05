/// <reference types="react" />
import { RowData, Table } from "@tanstack/table-core";
interface TableHeadProps<T extends RowData> {
    filtering?: boolean;
    grouping?: boolean;
    pinning?: boolean;
    sorting?: boolean;
    table: Table<T>;
}
declare function TableHead<T extends RowData>({ filtering, grouping, pinning, sorting, table, }: TableHeadProps<T>): JSX.Element;
export default TableHead;
