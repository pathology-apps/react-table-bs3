import { ReactNode } from "react";
import { Table, Header } from "@tanstack/table-core";
interface HeaderToolsProps<T> {
    children: ReactNode;
    header: Header<T, unknown>;
    table: Table<T>;
}
declare function HeaderTools<T>({ children, header, table }: HeaderToolsProps<T>): JSX.Element;
export default HeaderTools;
