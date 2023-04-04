/// <reference types="react" />
import { Table, HeaderGroup as CoreHeaderGroup } from "@tanstack/table-core";
interface HeaderGroupProps<T> {
    headerGroup: CoreHeaderGroup<T>;
    table: Table<T>;
}
declare function HeaderGroup<T>({ headerGroup, table }: HeaderGroupProps<T>): JSX.Element;
export default HeaderGroup;
