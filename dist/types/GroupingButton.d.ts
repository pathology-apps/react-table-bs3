/// <reference types="react" />
import { Row, RowData } from "@tanstack/table-core";
interface GroupingButtonProps<T extends RowData> {
    row: Row<T>;
}
declare function GroupingButton<T extends RowData>({ row, }: GroupingButtonProps<T>): JSX.Element;
export default GroupingButton;
