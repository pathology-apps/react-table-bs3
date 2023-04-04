/// <reference types="react" />
import { RowData, Table } from "@tanstack/react-table";
interface TableHeadProps<T extends RowData> {
    table: Table<T>;
}
declare function TableHead<T extends RowData>({ table }: TableHeadProps<T>): JSX.Element;
export default TableHead;
