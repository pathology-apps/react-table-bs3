import React from "react";
import { HeaderGroup, RowData } from "@tanstack/table-core";
interface FilteredHeaderRowProps<T extends RowData> {
    filtering?: boolean;
    grouping?: boolean;
    headerGroup: HeaderGroup<T>;
}
declare function FilteredHeaderRow<T extends RowData>({ filtering, grouping, headerGroup, }: FilteredHeaderRowProps<T>): React.JSX.Element;
export default FilteredHeaderRow;
