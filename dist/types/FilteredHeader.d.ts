/// <reference types="react" />
import { Header, RowData } from "@tanstack/table-core";
interface FilteredHeaderProps<T extends RowData> {
    header: Header<T, unknown>;
}
declare function FilteredHeader<T extends RowData>({ header, }: FilteredHeaderProps<T>): JSX.Element;
export default FilteredHeader;
