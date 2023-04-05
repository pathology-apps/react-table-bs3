import React, { useState, useEffect } from 'react';
import { useDrop, useDrag, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { flexRender } from '@tanstack/react-table';

const recursiveFilter = (concern, value) => {
    if (Array.isArray(concern)) {
        return concern.some(item => {
            return recursiveFilter(item, value);
        });
    }
    if (typeof concern === "object") {
        if (concern === null) {
            return false;
        }
        const keys = Object.keys(concern);
        return keys.some(key => {
            return recursiveFilter(concern[key], value);
        });
    }
    if (typeof concern === "string") {
        return concern.toLowerCase().includes(value.toLowerCase());
    }
    if (Number.isInteger(parseInt(concern, 10))) {
        if (concern.toString().includes(value)) {
            return true;
        }
        if (concern === value) {
            return true;
        }
        return false;
    }
    return false;
};
const tableFilter = (row, columnId, value) => {
    let concern = row.original[columnId];
    if (!concern) {
        concern = row.renderValue(columnId);
    }
    return recursiveFilter(concern, value);
};
const valueFilter = (row, columnId, value) => {
    const concern = row.renderValue(columnId);
    if (!concern || typeof concern !== "string") {
        return false;
    }
    return concern.toLowerCase().includes(value.toLowerCase());
};

const NextButton = ({ loading = false, table, }) => {
    return (React.createElement("button", { type: "button", className: table.getCanNextPage() && !loading
            ? "btn btn-primary btn-block"
            : "btn btn-block disabled", onClick: () => table.getCanNextPage() && table.nextPage() }, "Next"));
};

const PageSelector = ({ requestedPage, setRequestedPage, table, }) => {
    const [localRequestedPage, setLocalRequestedPage] = useState(1);
    const finalRequestedPage = requestedPage === undefined ? localRequestedPage : requestedPage;
    const finalSetRequestedPage = setRequestedPage === undefined ? setLocalRequestedPage : setRequestedPage;
    useEffect(() => {
        setLocalRequestedPage(table.getState().pagination.pageIndex + 1);
    }, [table.getState().pagination.pageIndex]);
    return (React.createElement("span", null,
        "Page",
        " ",
        React.createElement("input", { type: "number", value: finalRequestedPage, onKeyDown: e => {
                if (e.code === "Enter" || e.code === "NumpadEnter") {
                    const page = e.target.value
                        ? Number(e.target.value) - 1
                        : 0;
                    table.setPageIndex(parseInt(page.toString(), 10));
                }
            }, onChange: e => finalSetRequestedPage(Number(e.target.value)), style: {
                width: "75px",
                display: "inline-block",
            }, className: "form-control" }),
        " ",
        "of ",
        table.getPageCount()));
};

const PageSizeSelector = ({ table, }) => {
    return (React.createElement("select", { value: table.getState().pagination.pageSize, style: {
            width: "100px",
        }, onChange: e => {
            table.setPageSize(Number(e.target.value));
        }, className: "form-control" }, [1, 3, 5, 10, 20, 30, 40, 50].map(pageSize => (React.createElement("option", { key: pageSize, value: pageSize },
        pageSize,
        " rows")))));
};

const PreviousButton = ({ loading = false, table, }) => {
    return (React.createElement("button", { type: "button", className: table.getCanPreviousPage() && !loading
            ? "btn btn-primary btn-block"
            : "btn btn-block disabled", onClick: () => table.getCanPreviousPage() && table.previousPage() }, "Previous"));
};

function DataFooter({ loading, requestedPage, setRequestedPage, table, }) {
    return (React.createElement("div", { className: "well well-sm" },
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col col-xs-12" },
                React.createElement("div", { style: {
                        display: "flex",
                        gap: ".5em",
                        justifyContent: "space-evenly",
                    } },
                    React.createElement("div", { style: { display: "contents" } },
                        React.createElement(PreviousButton, { table: table, loading: loading })),
                    React.createElement("div", { style: {
                            minWidth: "200px",
                            display: "flex",
                            justifyContent: "center",
                        } },
                        React.createElement(PageSelector, { table: table, requestedPage: requestedPage, setRequestedPage: setRequestedPage })),
                    React.createElement("div", { style: {
                            minWidth: "200px",
                            display: "flex",
                            justifyContent: "center",
                        } },
                        React.createElement(PageSizeSelector, { table: table })),
                    React.createElement("div", { style: { display: "contents" } },
                        React.createElement(NextButton, { table: table, loading: loading })))))));
}

function LoadingScreen({ loading, loadingOffset, }) {
    if (!loading) {
        return null;
    }
    const className = `loading ${loading ? "progress" : ""}`;
    return (React.createElement("div", { className: className, style: { left: loadingOffset } },
        React.createElement("span", null,
            "Loading",
            React.createElement("span", { className: "one" }, "."),
            React.createElement("span", { className: "two" }, "."),
            React.createElement("span", { className: "three" }, "."))));
}

function TableCell({ cell, cellProps, row, }) {
    var _a, _b;
    // For cells with repeated values, render null
    // Otherwise, just render the regular cell
    let cellRender = flexRender(cell.column.columnDef.cell, cell.getContext());
    if (cell.getIsGrouped()) {
        // If it's a grouped cell, add an expander and row count
        cellRender = (React.createElement("button", Object.assign({ type: "button" }, {
            onClick: row.getToggleExpandedHandler(),
            style: {
                cursor: row.getCanExpand() ? "pointer" : "normal",
            },
        }),
            flexRender(cell.column.columnDef.cell, cell.getContext()),
            "\u00A0 (",
            row.subRows.length,
            ")"));
    }
    if (cell.getIsAggregated()) {
        // If the cell is aggregated, use the Aggregated
        // renderer for cell
        cellRender = flexRender((_a = cell.column.columnDef.aggregatedCell) !== null && _a !== void 0 ? _a : cell.column.columnDef.cell, cell.getContext());
    }
    return (React.createElement("td", Object.assign({}, Object.assign({ style: {
            width: cell.column.getSize(),
            maxWidth: cell.column.getSize(),
            wordWrap: "break-word",
            color: "#444",
        } }, ((_b = cellProps === null || cellProps === void 0 ? void 0 : cellProps(cell, row)) !== null && _b !== void 0 ? _b : {}))), cellRender));
}

function TableRow({ cellProps, row, rowProps, }) {
    var _a;
    return (React.createElement("tr", Object.assign({}, ((_a = rowProps === null || rowProps === void 0 ? void 0 : rowProps(row)) !== null && _a !== void 0 ? _a : {})), row.getVisibleCells().map(cell => (React.createElement(TableCell, { key: `${cell.id}_tableCell`, cell: cell, cellProps: cellProps, row: row })))));
}

function TableBody({ cellProps, rowProps, table, }) {
    var _a;
    const rowModel = table.getRowModel();
    if (!((_a = rowModel === null || rowModel === void 0 ? void 0 : rowModel.rows) === null || _a === void 0 ? void 0 : _a.length)) {
        return React.createElement("tbody", null);
    }
    return (React.createElement("tbody", null, table.getRowModel().rows.map(row => (React.createElement(TableRow, { key: `${row.id}_tableRow`, cellProps: cellProps, row: row, rowProps: rowProps })))));
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function DebouncedInput(_a) {
    var { debounce = 500, onChange, value: initialValue } = _a, props = __rest(_a, ["debounce", "onChange", "value"]);
    const [value, setValue] = useState(initialValue);
    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);
    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value);
        }, debounce);
        return () => clearTimeout(timeout);
    }, [value]);
    return (React.createElement("input", Object.assign({}, props, { value: value, onChange: e => setValue(e.target.value) })));
}

function Filter({ column, }) {
    const columnFilterValue = column.getFilterValue();
    if (!column.getCanFilter()) {
        return null;
    }
    return (React.createElement(DebouncedInput, { type: "text", value: columnFilterValue !== null && columnFilterValue !== void 0 ? columnFilterValue : "", onChange: value => column.setFilterValue(value), className: "form-control", style: {
            display: "block",
            width: "100%",
        }, list: `${column.id}_list` }));
}

function GroupedHeader({ filtering, grouping, header, }) {
    const { column } = header;
    return (React.createElement(React.Fragment, null,
        filtering && React.createElement(Filter, { column: column }),
        grouping && column.getCanGroup() ? (React.createElement("span", { className: "input-group-btn" },
            React.createElement("button", Object.assign({ type: "button" }, {
                className: "btn btn-default",
                onClick: column.getToggleGroupingHandler(),
                style: {
                    cursor: "pointer",
                },
            }), column.getIsGrouped() ? (React.createElement("span", { className: "glyphicon glyphicon-remove-sign", "aria-hidden": "true" })) : (React.createElement("span", { className: "glyphicon glyphicon-duplicate", "aria-hidden": "true" }))))) : null));
}

function FilteredHeader({ filtering, grouping, header, }) {
    return grouping && header.column.getCanGroup() ? (React.createElement("div", { className: "input-group" },
        React.createElement(GroupedHeader, { filtering: filtering, grouping: grouping, header: header }))) : (React.createElement(GroupedHeader, { filtering: filtering, grouping: grouping, header: header }));
}

function FilteredHeaderCell({ filtering, grouping, header, }) {
    return (React.createElement("th", Object.assign({}, {
        colSpan: header.colSpan,
        style: {
            width: header.getSize(),
            maxWidth: header.getSize(),
            wordWrap: "break-word",
            position: "relative",
        },
    }), header.column.getCanFilter() ? (React.createElement(FilteredHeader, { filtering: filtering, grouping: grouping, header: header })) : null));
}

function FilteredHeaderRow({ filtering, grouping, headerGroup, }) {
    return (React.createElement("tr", { key: `${headerGroup.id}_filter` }, headerGroup.headers.map((header) => (React.createElement(FilteredHeaderCell, { filtering: filtering, grouping: grouping, header: header, key: `${header.id}_filterCell` })))));
}

function Unpin({ header }) {
    return (React.createElement("button", { className: "btn btn-link btn-xs", onClick: e => {
            e.stopPropagation();
            header.column.pin(false);
        } },
        React.createElement("span", { style: {
                color: "#337ab7",
            }, className: "glyphicon glyphicon-pushpin", "aria-hidden": "true" })));
}

const reorderColumn = (draggedColumnId, targetColumnId, columnOrder) => {
    columnOrder.splice(columnOrder.indexOf(targetColumnId), 0, columnOrder.splice(columnOrder.indexOf(draggedColumnId), 1)[0]);
    return [...columnOrder];
};
function HeaderTools({ children, header, pinning, table, }) {
    const { getState, setColumnOrder } = table;
    const { columnOrder } = getState();
    const { column } = header;
    const [, dropRef] = useDrop({
        accept: "column",
        drop: (draggedColumn) => {
            const newColumnOrder = reorderColumn(draggedColumn.id, column.id, columnOrder);
            setColumnOrder(newColumnOrder);
        },
    });
    const [{ isDragging }, dragRef, previewRef] = useDrag({
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
        item: () => column,
        type: "column",
    });
    const renderPin = (column, header, position) => {
        if (!pinning)
            return null;
        return column.getIsPinned() !== position ? (React.createElement("button", { className: "btn btn-link btn-xs", style: {
                color: "#ddd",
            }, onClick: e => {
                e.stopPropagation();
                column.pin(position);
            } },
            React.createElement("span", { className: `glyphicon glyphicon-chevron-${position}`, "aria-hidden": "true" }))) : (React.createElement(Unpin, { header: header }));
    };
    return (React.createElement("div", { ref: dragRef },
        React.createElement("div", { ref: dropRef, style: { opacity: isDragging ? 0.5 : 1, width: "100%" }, key: `${header.id} _headerCellPin` },
            React.createElement("div", { style: {
                    display: "flex",
                    justifyContent: "space-between",
                    overflow: "hidden",
                }, ref: previewRef }, !header.isPlaceholder && column.getCanPin() && (React.createElement(React.Fragment, null,
                renderPin(column, header, "left"),
                children,
                renderPin(column, header, "right")))))));
}

function HeaderCell({ header, pinning, sorting, table, }) {
    const className = sorting ? `${header.column.getIsSorted()} sortable` : "";
    return (React.createElement("th", Object.assign({}, {
        colSpan: header.colSpan,
        className: sorting && header.column.getCanSort() ? className : undefined,
        style: {
            width: header.getSize(),
            maxWidth: header.getSize(),
            wordWrap: "break-word",
            position: "relative",
        },
        onClick: sorting && header.column.getCanSort()
            ? header.column.getToggleSortingHandler()
            : undefined,
    }),
        React.createElement(HeaderTools, { header: header, key: `${header.id}_headerTools`, pinning: pinning, table: table }, header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())),
        React.createElement("div", Object.assign({}, {
            onClick: e => e.stopPropagation(),
            onMouseDown: header.getResizeHandler(),
            onTouchStart: header.getResizeHandler(),
            className: `resizer ${header.column.getIsResizing() ? "isResizing" : ""}`,
        }))));
}

function HeaderRow({ headerGroup, pinning, sorting, table, }) {
    return (React.createElement("tr", null, headerGroup.headers.map((header) => (React.createElement(HeaderCell, { header: header, key: `${header.id}_headerCell`, pinning: pinning, sorting: sorting, table: table })))));
}

function HeaderGroup({ filtering, grouping, headerGroup, pinning, sorting, table, }) {
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderRow, { headerGroup: headerGroup, pinning: pinning, sorting: sorting, table: table }),
        (filtering || grouping) && (React.createElement(FilteredHeaderRow, { filtering: filtering, grouping: grouping, headerGroup: headerGroup }))));
}

function TableHead({ filtering, grouping, pinning, sorting, table, }) {
    return (React.createElement("thead", null, table.getHeaderGroups().map(headerGroup => (React.createElement(HeaderGroup, { filtering: filtering, grouping: grouping, headerGroup: headerGroup, key: headerGroup.id, pinning: pinning, sorting: sorting, table: table })))));
}

function TableComponent({ cellProps, filtering, grouping, pinning, rowProps, sorting, table, tableProps, }) {
    var _a;
    return (React.createElement(DndProvider, { backend: HTML5Backend },
        React.createElement("table", Object.assign({}, Object.assign({ className: "react-table-bs3 table table-condensed table-bordered" }, ((_a = tableProps === null || tableProps === void 0 ? void 0 : tableProps(table)) !== null && _a !== void 0 ? _a : {}))),
            React.createElement(TableHead, { filtering: filtering, grouping: grouping, pinning: pinning, sorting: sorting, table: table }),
            React.createElement(TableBody, { table: table, cellProps: cellProps, rowProps: rowProps }))));
}

function DataTableView({ cellProps, filtering, grouping, loading, loadingOffset, pinning, rowProps, sorting, table, tableProps, viewRef, }) {
    return (React.createElement("div", { ref: viewRef, style: {
            overflowX: loading ? "hidden" : "auto",
            position: "relative",
        } },
        React.createElement(LoadingScreen, { loading: loading, loadingOffset: loadingOffset }),
        React.createElement(TableComponent, { cellProps: cellProps, filtering: filtering, grouping: grouping, pinning: pinning, rowProps: rowProps, sorting: sorting, table: table, tableProps: tableProps })));
}

function GroupingButton({ row, }) {
    return (React.createElement("button", Object.assign({ type: "button" }, {
        onClick: row.getToggleExpandedHandler(),
        className: "btn btn-default",
        style: { cursor: "pointer" },
    }), row.getIsExpanded() ? (React.createElement("span", { className: "glyphicon glyphicon-remove-sign", "aria-hidden": "true" })) : (React.createElement("span", { className: "glyphicon glyphicon-duplicate", "aria-hidden": "true" }))));
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".react-table-bs3 {\n    table-layout: fixed;\n    width: 100%;\n}\n\n.react-table-bs3 tr {\n    width: -moz-fit-content;\n    width: fit-content;\n}\n\n.react-table-bs3 > thead > th,\n.react-table-bs3 > tbody > td {\n    border-collapse: collapse;\n    padding: 0.25rem;\n}\n\n.react-table-bs3 > thead > th {\n    border-collapse: collapse;\n    padding: 2px 4px;\n    font-weight: bold;\n    text-align: center;\n    height: 30px;\n    width: 100px;\n    white-space: nowrap;\n}\n\n.react-table-bs3 td {\n    height: 30px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.resizer {\n    position: absolute;\n    top: 0;\n    right: 0; /* Set right to 0 to position the resizing handle inside the table */\n    bottom: 0;\n    width: 5px;\n    cursor: col-resize;\n    z-index: 1;\n    background-color: transparent;\n}\n\n.resizer.isResizing {\n    background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(217, 255, 0, 0.8) 100%);\n    opacity: 1;\n}\n\n@media (hover: hover) {\n    .resizer {\n        opacity: 0;\n    }\n\n    *:hover>.resizer {\n        opacity: 1;\n    }\n}\n\n.loading {\n    z-index: 2000;\n    position: absolute;\n    display: flex;\n    visibility: hidden;\n    width: 100%;\n    height: 100%;\n    top: 0px;\n    left: 0px;\n    min-height: 500px;\n    align-items: center;\n    justify-content: center;\n    font-size: 2em;\n    color: rgb(255, 255, 255);\n}\n.loading.progress {\n    visibility: visible;\n    text-shadow: rgba(0, 0, 0, 0.3) 1px 1px;\n    background: rgba(0, 0, 0, 0.75);\n    border-radius: 5px;\n    transition: all .4s;\n}\n\n.one {\n    opacity: 0;\n    -webkit-animation: dot 1.3s infinite;\n    -webkit-animation-delay: 0.0s;\n    animation: dot 1.3s infinite;\n    animation-delay: 0.0s;\n}\n\n.two {\n    opacity: 0;\n    -webkit-animation: dot 1.3s infinite;\n    -webkit-animation-delay: 0.2s;\n    animation: dot 1.3s infinite;\n    animation-delay: 0.2s;\n}\n\n.three {\n    opacity: 0;\n    -webkit-animation: dot 1.3s infinite;\n    -webkit-animation-delay: 0.3s;\n    animation: dot 1.3s infinite;\n    animation-delay: 0.3s;\n}\n\n@keyframes dot {\n    0% {\n        opacity: 0;\n    }\n\n    50% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n\n.sortable {\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n}\n\nth.desc {\n    box-shadow: inset 0 -3px 0 0 rgb(0,0,0,0.6);\n}\n\nth.asc {\n    box-shadow: inset 0 3px 0 0 rgb(0,0,0,0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBa0I7SUFBbEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVEsRUFBRSxvRUFBb0U7SUFDOUUsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHVGQUF1RjtJQUN2RixVQUFVO0FBQ2Q7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osUUFBUTtJQUNSLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsdUNBQXFDO0lBQ3JDLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9DQUFvQztJQUNwQyw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixvQ0FBb0M7SUFDcEMsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBaUI7T0FBakIsc0JBQWlCO1lBQWpCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLDBDQUEwQztBQUM5QyIsImZpbGUiOiJpbmRleC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVhY3QtdGFibGUtYnMzIHtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucmVhY3QtdGFibGUtYnMzIHRyIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5yZWFjdC10YWJsZS1iczMgPiB0aGVhZCA+IHRoLFxuLnJlYWN0LXRhYmxlLWJzMyA+IHRib2R5ID4gdGQge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgcGFkZGluZzogMC4yNXJlbTtcbn1cblxuLnJlYWN0LXRhYmxlLWJzMyA+IHRoZWFkID4gdGgge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgcGFkZGluZzogMnB4IDRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ucmVhY3QtdGFibGUtYnMzIHRkIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ucmVzaXplciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDsgLyogU2V0IHJpZ2h0IHRvIDAgdG8gcG9zaXRpb24gdGhlIHJlc2l6aW5nIGhhbmRsZSBpbnNpZGUgdGhlIHRhYmxlICovXG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiA1cHg7XG4gICAgY3Vyc29yOiBjb2wtcmVzaXplO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5yZXNpemVyLmlzUmVzaXppbmcge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwKSAwJSwgcmdiYSgyMTcsIDI1NSwgMCwgMC44KSAxMDAlKTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAgIC5yZXNpemVyIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAqOmhvdmVyPi5yZXNpemVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5sb2FkaW5nIHtcbiAgICB6LWluZGV4OiAyMDAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cbi5sb2FkaW5nLnByb2dyZXNzIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIHRleHQtc2hhZG93OiByZ2IoMCAwIDAgLyAzMCUpIDFweCAxcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC40cztcbn1cblxuLm9uZSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZG90IDEuM3MgaW5maW5pdGU7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMHM7XG4gICAgYW5pbWF0aW9uOiBkb3QgMS4zcyBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMHM7XG59XG5cbi50d28ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGRvdCAxLjNzIGluZmluaXRlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICAgIGFuaW1hdGlvbjogZG90IDEuM3MgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xufVxuXG4udGhyZWUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGRvdCAxLjNzIGluZmluaXRlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xuICAgIGFuaW1hdGlvbjogZG90IDEuM3MgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xufVxuXG5Aa2V5ZnJhbWVzIGRvdCB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4uc29ydGFibGUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxudGguZGVzYyB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtM3B4IDAgMCByZ2IoMCwwLDAsMC42KTtcbn1cblxudGguYXNjIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDNweCAwIDAgcmdiKDAsMCwwLDAuNik7XG59Il19 */";
styleInject(css_248z);

function BootstrapTable({ cellProps, filtering = true, grouping = true, loading, loadingOffset, pinning = true, requestedPage, rowProps, setRequestedPage, sorting = true, table, tableProps, viewRef, }) {
    return table ? (React.createElement(React.Fragment, null,
        React.createElement(DataTableView, { cellProps: cellProps, filtering: filtering, grouping: grouping, loading: loading, loadingOffset: loadingOffset, pinning: pinning, rowProps: rowProps, sorting: sorting, table: table, tableProps: tableProps, viewRef: viewRef }),
        React.createElement(DataFooter, { loading: loading, requestedPage: requestedPage, setRequestedPage: setRequestedPage, table: table }))) : null;
}

export { BootstrapTable, GroupingButton, tableFilter, valueFilter };
//# sourceMappingURL=index.esm.js.map
