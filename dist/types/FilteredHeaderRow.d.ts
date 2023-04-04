/// <reference types="react" />
import { HeaderGroup, RowData } from "@tanstack/table-core";
interface FilteredHeaderRowProps<T extends RowData> {
    headerGroup: HeaderGroup<T>;
}
declare function FilteredHeaderRow<T extends RowData>({ headerGroup, }: FilteredHeaderRowProps<T>): JSX.Element;
export default FilteredHeaderRow;
