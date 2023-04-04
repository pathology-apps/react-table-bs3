type Concern = any;
declare const tableFilter: (row: {
    original: Record<string, Concern>;
    renderValue: (columnId: string) => Concern;
}, columnId: string, value: string) => boolean;
declare const valueFilter: (row: {
    renderValue: (columnId: string) => Concern;
}, columnId: string, value: string) => boolean;
export { tableFilter, valueFilter };
