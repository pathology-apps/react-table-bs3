/// <reference types="react" />
import { Header, RowData } from "@tanstack/table-core";
interface GroupedHeaderProps<T extends RowData> {
    filtering?: boolean;
    grouping?: boolean;
    header: Header<T, unknown>;
}
declare function GroupedHeader<T extends RowData>({ filtering, grouping, header, }: GroupedHeaderProps<T>): JSX.Element;
export default GroupedHeader;
