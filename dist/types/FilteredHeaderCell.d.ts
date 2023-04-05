/// <reference types="react" />
import { Header, RowData } from "@tanstack/table-core";
interface FilteredHeaderCellProps<T extends RowData> {
    filtering?: boolean;
    grouping?: boolean;
    header: Header<T, unknown>;
}
declare function FilteredHeaderCell<T extends RowData>({ filtering, grouping, header, }: FilteredHeaderCellProps<T>): JSX.Element;
export default FilteredHeaderCell;
