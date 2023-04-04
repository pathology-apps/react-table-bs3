/// <reference types="react" />
import { Header, RowData } from "@tanstack/table-core";
interface GroupedHeaderProps<T extends RowData> {
    header: Header<T, unknown>;
}
declare function GroupedHeader<T extends RowData>({ header, }: GroupedHeaderProps<T>): JSX.Element;
export default GroupedHeader;
