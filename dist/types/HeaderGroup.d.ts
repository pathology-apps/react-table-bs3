/// <reference types="react" />
import { Table, HeaderGroup as CoreHeaderGroup } from "@tanstack/table-core";
interface HeaderGroupProps<T> {
    filtering?: boolean;
    grouping?: boolean;
    headerGroup: CoreHeaderGroup<T>;
    pinning?: boolean;
    sorting?: boolean;
    table: Table<T>;
}
declare function HeaderGroup<T>({ filtering, grouping, headerGroup, pinning, sorting, table, }: HeaderGroupProps<T>): JSX.Element;
export default HeaderGroup;
