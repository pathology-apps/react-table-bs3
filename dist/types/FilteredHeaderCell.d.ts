/// <reference types="react" />
import { Header, RowData } from "@tanstack/table-core";
interface FilteredHeaderCellProps<T extends RowData> {
    header: Header<T, unknown>;
}
declare function FilteredHeaderCell<T extends RowData>({ header, }: FilteredHeaderCellProps<T>): JSX.Element;
export default FilteredHeaderCell;
