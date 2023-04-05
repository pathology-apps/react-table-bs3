/// <reference types="react" />
import { Header, RowData } from "@tanstack/table-core";
interface FilteredHeaderProps<T extends RowData> {
    filtering?: boolean;
    grouping?: boolean;
    header: Header<T, unknown>;
}
declare function FilteredHeader<T extends RowData>({ filtering, grouping, header, }: FilteredHeaderProps<T>): JSX.Element;
export default FilteredHeader;
