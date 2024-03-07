import React from "react";
import { Header, RowData } from "@tanstack/react-table";
interface UnpinProps<T extends RowData> {
    header: Header<T, unknown>;
}
export default function Unpin<T extends RowData>({ header }: UnpinProps<T>): React.JSX.Element;
export {};
