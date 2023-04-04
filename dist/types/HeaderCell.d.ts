/// <reference types="react" />
import { Table, Header } from "@tanstack/table-core";
interface HeaderCellProps<T> {
    header: Header<T, unknown>;
    table: Table<T>;
}
declare function HeaderCell<T>({ header, table }: HeaderCellProps<T>): JSX.Element;
export default HeaderCell;
