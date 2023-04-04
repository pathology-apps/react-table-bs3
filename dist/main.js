import "./main.css";
import {jsxs as $4MPRY$jsxs, Fragment as $4MPRY$Fragment, jsx as $4MPRY$jsx} from "react/jsx-runtime";
import {useState as $4MPRY$useState, useEffect as $4MPRY$useEffect} from "react";
import {DndProvider as $4MPRY$DndProvider, useDrop as $4MPRY$useDrop, useDrag as $4MPRY$useDrag} from "react-dnd";
import {HTML5Backend as $4MPRY$HTML5Backend} from "react-dnd-html5-backend";
import {flexRender as $4MPRY$flexRender} from "@tanstack/react-table";



// Checks any object, array, string, or integer exhaustively for a value
const $76592b60f149be3e$var$recursiveFilter = (concern, value)=>{
    if (Array.isArray(concern)) return concern.some((item)=>{
        if ($76592b60f149be3e$var$recursiveFilter(item, value)) return true;
        return false;
    });
    if (typeof concern === "object") {
        if (concern === null) return false;
        const keys = Object.keys(concern);
        return keys.some((key)=>{
            if ($76592b60f149be3e$var$recursiveFilter(concern[key], value)) return true;
            return false;
        });
    }
    if (typeof concern === "string") {
        if (concern.toLowerCase().includes(value.toLowerCase())) return true;
    }
    if (Number.isInteger(parseInt(concern, 10))) {
        if (concern.toString().includes(value)) return true;
        if (concern === value) return true;
        return false;
    }
    return false;
};
const $76592b60f149be3e$export$9d9ea8dbe2f59d9a = (row, columnId, value)=>{
    let concern = row.original[columnId];
    if (!concern) concern = row.renderValue(columnId);
    return $76592b60f149be3e$var$recursiveFilter(concern, value);
};
const $76592b60f149be3e$export$95551f3ba34233a8 = (row, columnId, value)=>{
    const concern = row.renderValue(columnId);
    if (!concern || false) return false;
    // Check if concern contains value:
    if (concern.toLowerCase().includes(value.toLowerCase())) return true;
    return false;
};






function $c48bdfcb5a725a8e$var$NextButton({ loading: loading , table: table  }) {
    // If loading is undefined, set it to false:
    loading = loading || false;
    return /*#__PURE__*/ (0, $4MPRY$jsx)("button", {
        type: "button",
        className: table.getCanNextPage() && loading === false ? "btn btn-primary btn-block" : "btn btn-block disabled",
        onClick: ()=>table.getCanNextPage() && table.nextPage(),
        children: "Next"
    });
}
var $c48bdfcb5a725a8e$export$2e2bcd8739ae039 = $c48bdfcb5a725a8e$var$NextButton;




function $61aac0ca294d0b40$var$PageSelector({ requestedPage: requestedPage , setRequestedPage: setRequestedPage , table: table  }) {
    // requestedPage and setRequestedPage might be undefined if the table is not paginated on the server, so we need to make local state to track the [requestedPage, setRequestedPage] state.
    const [localRequestedPage, setLocalRequestedPage] = (0, $4MPRY$useState)(1);
    // If requestedPage is undefined, we use the localRequestedPage state.
    const finalRequestedPage = requestedPage === undefined ? localRequestedPage : requestedPage;
    // If setRequestedPage is undefined, we use the setLocalRequestedPage function.
    const finalSetRequestedPage = setRequestedPage === undefined ? setLocalRequestedPage : setRequestedPage;
    (0, $4MPRY$useEffect)(()=>{
        setLocalRequestedPage(table.getState().pagination.pageIndex + 1);
    }, [
        table.getState().pagination.pageIndex
    ]);
    return /*#__PURE__*/ (0, $4MPRY$jsxs)("span", {
        children: [
            "Page",
            " ",
            /*#__PURE__*/ (0, $4MPRY$jsx)("input", {
                type: "number",
                value: finalRequestedPage,
                onKeyDown: (e)=>{
                    if (e.code === "Enter" || e.code === "NumpadEnter") {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0;
                        table.setPageIndex(parseInt(page, 10));
                    }
                },
                onChange: (e)=>finalSetRequestedPage(e.target.value),
                style: {
                    width: "75px",
                    display: "inline-block"
                },
                className: "form-control"
            }),
            " ",
            "of ",
            table.getPageCount()
        ]
    });
}
var $61aac0ca294d0b40$export$2e2bcd8739ae039 = $61aac0ca294d0b40$var$PageSelector;




function $01504841efe4a746$var$PageSizeSelector({ table: table  }) {
    return /*#__PURE__*/ (0, $4MPRY$jsx)("select", {
        value: table.getState().pagination.pageSize,
        style: {
            width: "100px"
        },
        onChange: (e)=>{
            table.setPageSize(Number(e.target.value));
        },
        className: "form-control",
        children: [
            1,
            3,
            5,
            10,
            20,
            30,
            40,
            50
        ].map((pageSize)=>/*#__PURE__*/ (0, $4MPRY$jsxs)("option", {
                value: pageSize,
                children: [
                    pageSize,
                    " rows"
                ]
            }, pageSize))
    });
}
var $01504841efe4a746$export$2e2bcd8739ae039 = $01504841efe4a746$var$PageSizeSelector;




function $879f0feeb7e67943$var$PreviousButton({ loading: loading , table: table  }) {
    // If loading is undefined, set it to false:
    loading = loading || false;
    return /*#__PURE__*/ (0, $4MPRY$jsx)("button", {
        type: "button",
        className: table.getCanPreviousPage() && loading === false ? "btn btn-primary btn-block" : "btn btn-block disabled",
        onClick: ()=>table.getCanPreviousPage() && table.previousPage(),
        children: "Previous"
    });
}
var $879f0feeb7e67943$export$2e2bcd8739ae039 = $879f0feeb7e67943$var$PreviousButton;


function $4aa40443a491d05e$var$DataFooter({ loading: loading , requestedPage: requestedPage , setRequestedPage: setRequestedPage , table: table  }) {
    return /*#__PURE__*/ (0, $4MPRY$jsx)("div", {
        className: "well well-sm",
        children: /*#__PURE__*/ (0, $4MPRY$jsx)("div", {
            className: "row",
            children: /*#__PURE__*/ (0, $4MPRY$jsx)("div", {
                className: "col col-xs-12",
                children: /*#__PURE__*/ (0, $4MPRY$jsxs)("div", {
                    style: {
                        display: "flex",
                        gap: ".5em",
                        justifyContent: "space-evenly"
                    },
                    children: [
                        /*#__PURE__*/ (0, $4MPRY$jsx)("div", {
                            style: {
                                display: "contents"
                            },
                            children: /*#__PURE__*/ (0, $4MPRY$jsx)((0, $879f0feeb7e67943$export$2e2bcd8739ae039), {
                                table: table,
                                loading: loading
                            })
                        }),
                        /*#__PURE__*/ (0, $4MPRY$jsx)("div", {
                            style: {
                                minWidth: "200px",
                                display: "flex",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ (0, $4MPRY$jsx)((0, $61aac0ca294d0b40$export$2e2bcd8739ae039), {
                                table: table,
                                requestedPage: requestedPage,
                                setRequestedPage: setRequestedPage
                            })
                        }),
                        /*#__PURE__*/ (0, $4MPRY$jsx)("div", {
                            style: {
                                minWidth: "200px",
                                display: "flex",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ (0, $4MPRY$jsx)((0, $01504841efe4a746$export$2e2bcd8739ae039), {
                                table: table
                            })
                        }),
                        /*#__PURE__*/ (0, $4MPRY$jsx)("div", {
                            style: {
                                display: "contents"
                            },
                            children: /*#__PURE__*/ (0, $4MPRY$jsx)((0, $c48bdfcb5a725a8e$export$2e2bcd8739ae039), {
                                table: table,
                                loading: loading
                            })
                        })
                    ]
                })
            })
        })
    });
}
var $4aa40443a491d05e$export$2e2bcd8739ae039 = $4aa40443a491d05e$var$DataFooter;






function $a79c5d361a825d07$var$LoadingScreen({ loading: loading , loadingOffset: loadingOffset  }) {
    if (!loading) return null;
    const className = `loading ${loading ? "progress" : ""}`;
    return /*#__PURE__*/ (0, $4MPRY$jsx)("div", {
        className: className,
        style: {
            left: loadingOffset
        },
        children: /*#__PURE__*/ (0, $4MPRY$jsxs)("span", {
            children: [
                "Loading",
                /*#__PURE__*/ (0, $4MPRY$jsx)("span", {
                    className: "one",
                    children: "."
                }),
                /*#__PURE__*/ (0, $4MPRY$jsx)("span", {
                    className: "two",
                    children: "."
                }),
                /*#__PURE__*/ (0, $4MPRY$jsx)("span", {
                    className: "three",
                    children: "."
                })
            ]
        })
    });
}
var $a79c5d361a825d07$export$2e2bcd8739ae039 = $a79c5d361a825d07$var$LoadingScreen;













function $1884ee073740af56$var$TableCell({ cell: cell , cellProps: cellProps , row: row  }) {
    // For cells with repeated values, render null
    // Otherwise, just render the regular cell
    let cellRender = (0, $4MPRY$flexRender)(cell.column.columnDef.cell, cell.getContext());
    if (cell.getIsGrouped()) // If it's a grouped cell, add an expander and row count
    cellRender = /*#__PURE__*/ (0, $4MPRY$jsxs)("button", {
        type: "button",
        onClick: row.getToggleExpandedHandler(),
        style: {
            cursor: row.getCanExpand() ? "pointer" : "normal"
        },
        children: [
            (0, $4MPRY$flexRender)(cell.column.columnDef.cell, cell.getContext()),
            "\xa0 (",
            row.subRows.length,
            ")"
        ]
    });
    if (cell.getIsAggregated()) // If the cell is aggregated, use the Aggregated
    // renderer for cell
    cellRender = (0, $4MPRY$flexRender)(cell.column.columnDef.aggregatedCell ?? cell.column.columnDef.cell, cell.getContext());
    return /*#__PURE__*/ (0, $4MPRY$jsx)("td", {
        style: {
            width: cell.column.getSize(),
            maxWidth: cell.column.getSize(),
            wordWrap: "break-word",
            color: "#444"
        },
        ...cellProps(cell, row),
        children: cellRender
    });
}
var $1884ee073740af56$export$2e2bcd8739ae039 = $1884ee073740af56$var$TableCell;


function $f348eedacd33e478$var$TableRow({ cellProps: cellProps , row: row , rowProps: rowProps  }) {
    return /*#__PURE__*/ (0, $4MPRY$jsx)("tr", {
        ...rowProps(row),
        children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0, $4MPRY$jsx)((0, $1884ee073740af56$export$2e2bcd8739ae039), {
                cell: cell,
                cellProps: cellProps,
                row: row
            }, `${cell.id}_tableCell`))
    });
}
var $f348eedacd33e478$export$2e2bcd8739ae039 = $f348eedacd33e478$var$TableRow;


function $8f7210c3d51ef797$var$TableBody({ cellProps: cellProps , rowProps: rowProps , table: table  }) {
    const rowModel = table.getRowModel();
    if (!rowModel?.rows?.length) return /*#__PURE__*/ (0, $4MPRY$jsx)("tbody", {});
    return /*#__PURE__*/ (0, $4MPRY$jsx)("tbody", {
        children: table.getRowModel().rows.map((row)=>/*#__PURE__*/ (0, $4MPRY$jsx)((0, $f348eedacd33e478$export$2e2bcd8739ae039), {
                cellProps: cellProps,
                row: row,
                rowProps: rowProps
            }, `${row.id}_tableRow`))
    });
}
var $8f7210c3d51ef797$export$2e2bcd8739ae039 = $8f7210c3d51ef797$var$TableBody;


















function $4f18c3bf20d07ea0$var$DebouncedInput({ debounce: debounce = 500 , onChange: onChange , value: initialValue , ...props }) {
    const [value, setValue] = (0, $4MPRY$useState)(initialValue);
    (0, $4MPRY$useEffect)(()=>{
        setValue(initialValue);
    }, [
        initialValue
    ]);
    (0, $4MPRY$useEffect)(()=>{
        const timeout = setTimeout(()=>{
            onChange(value);
        }, debounce);
        return ()=>clearTimeout(timeout);
    }, [
        value
    ]);
    return /*#__PURE__*/ (0, $4MPRY$jsx)("input", {
        ...props,
        value: value,
        onChange: (e)=>setValue(e.target.value)
    });
}
var $4f18c3bf20d07ea0$export$2e2bcd8739ae039 = $4f18c3bf20d07ea0$var$DebouncedInput;


function $d20e4c49717ec33d$var$Filter({ column: column  }) {
    const columnFilterValue = column.getFilterValue();
    if (!column.getCanFilter()) return null;
    return /*#__PURE__*/ (0, $4MPRY$jsx)((0, $4f18c3bf20d07ea0$export$2e2bcd8739ae039), {
        type: "text",
        value: columnFilterValue ?? "",
        onChange: (value)=>column.setFilterValue(value),
        className: "form-control",
        style: {
            display: "block",
            width: "100%"
        },
        list: `${column.id}_list`
    });
}
var $d20e4c49717ec33d$export$2e2bcd8739ae039 = $d20e4c49717ec33d$var$Filter;


function $6ed532f1ce0fa00f$var$GroupedHeader({ header: header  }) {
    return /*#__PURE__*/ (0, $4MPRY$jsxs)((0, $4MPRY$Fragment), {
        children: [
            /*#__PURE__*/ (0, $4MPRY$jsx)((0, $d20e4c49717ec33d$export$2e2bcd8739ae039), {
                column: header.column
            }),
            header.column.getCanGroup() ? /*#__PURE__*/ (0, $4MPRY$jsx)("span", {
                className: "input-group-btn",
                children: /*#__PURE__*/ (0, $4MPRY$jsx)("button", {
                    type: "button",
                    className: "btn btn-default",
                    onClick: header.column.getToggleGroupingHandler(),
                    style: {
                        cursor: "pointer"
                    },
                    children: header.column.getIsGrouped() ? /*#__PURE__*/ (0, $4MPRY$jsx)("span", {
                        className: "glyphicon glyphicon-remove-sign",
                        "aria-hidden": "true"
                    }) : /*#__PURE__*/ (0, $4MPRY$jsx)("span", {
                        className: "glyphicon glyphicon-duplicate",
                        "aria-hidden": "true"
                    })
                })
            }) : null
        ]
    });
}
var $6ed532f1ce0fa00f$export$2e2bcd8739ae039 = $6ed532f1ce0fa00f$var$GroupedHeader;


function $a968b396f1e5232e$var$FilteredHeader({ header: header , table: table  }) {
    return header.column.getCanGroup() ? /*#__PURE__*/ (0, $4MPRY$jsx)("div", {
        className: "input-group",
        children: /*#__PURE__*/ (0, $4MPRY$jsx)((0, $6ed532f1ce0fa00f$export$2e2bcd8739ae039), {
            header: header,
            table: table
        })
    }) : /*#__PURE__*/ (0, $4MPRY$jsx)((0, $6ed532f1ce0fa00f$export$2e2bcd8739ae039), {
        header: header,
        table: table
    });
}
var $a968b396f1e5232e$export$2e2bcd8739ae039 = $a968b396f1e5232e$var$FilteredHeader;


function $9323f4008460d48d$var$FilteredHeaderCell({ header: header , table: table  }) {
    return /*#__PURE__*/ (0, $4MPRY$jsx)("th", {
        colSpan: header.colSpan,
        style: {
            width: header.getSize(),
            maxWidth: header.getSize(),
            wordWrap: "break-word",
            position: "relative"
        },
        children: header.column.getCanFilter() ? /*#__PURE__*/ (0, $4MPRY$jsx)((0, $a968b396f1e5232e$export$2e2bcd8739ae039), {
            header: header,
            table: table
        }) : null
    });
}
var $9323f4008460d48d$export$2e2bcd8739ae039 = $9323f4008460d48d$var$FilteredHeaderCell;


function $130822d1fadad788$var$FilteredHeaderRow({ headerGroup: headerGroup , table: table  }) {
    return /*#__PURE__*/ (0, $4MPRY$jsx)("tr", {
        children: headerGroup.headers.map((header)=>/*#__PURE__*/ (0, $4MPRY$jsx)((0, $9323f4008460d48d$export$2e2bcd8739ae039), {
                header: header,
                table: table
            }, `${header.id}_filterCell`))
    }, `${headerGroup.id}_filter`);
}
var $130822d1fadad788$export$2e2bcd8739ae039 = $130822d1fadad788$var$FilteredHeaderRow;












function $f5a76ed59462d3b3$export$2e2bcd8739ae039({ header: header  }) {
    return /*#__PURE__*/ (0, $4MPRY$jsx)("button", {
        className: "btn btn-link btn-xs",
        onClick: (e)=>{
            e.stopPropagation();
            header.column.pin(false);
        },
        children: /*#__PURE__*/ (0, $4MPRY$jsx)("span", {
            style: {
                color: "#337ab7"
            },
            className: "glyphicon glyphicon-pushpin",
            "aria-hidden": "true"
        })
    });
}


const $b9c565d9f4f0468f$var$reorderColumn = (draggedColumnId, targetColumnId, columnOrder)=>{
    columnOrder.splice(columnOrder.indexOf(targetColumnId), 0, columnOrder.splice(columnOrder.indexOf(draggedColumnId), 1)[0]);
    return [
        ...columnOrder
    ];
};
function $b9c565d9f4f0468f$export$2e2bcd8739ae039({ children: children , header: header , table: table  }) {
    const { getState: getState , setColumnOrder: setColumnOrder  } = table;
    const { columnOrder: columnOrder  } = getState();
    const { column: column  } = header;
    const [, dropRef] = (0, $4MPRY$useDrop)({
        accept: "column",
        drop: (draggedColumn)=>{
            const newColumnOrder = $b9c565d9f4f0468f$var$reorderColumn(draggedColumn.id, column.id, columnOrder);
            setColumnOrder(newColumnOrder);
        }
    });
    const [{ isDragging: isDragging  }, dragRef, previewRef] = (0, $4MPRY$useDrag)({
        collect: (monitor)=>({
                isDragging: monitor.isDragging()
            }),
        item: ()=>column,
        type: "column"
    });
    return /*#__PURE__*/ (0, $4MPRY$jsx)("div", {
        ref: dragRef,
        children: /*#__PURE__*/ (0, $4MPRY$jsx)("div", {
            ref: dropRef,
            colSpan: header.colSpan,
            style: {
                opacity: isDragging ? 0.5 : 1,
                width: "100%"
            },
            children: /*#__PURE__*/ (0, $4MPRY$jsx)("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    overflow: "hidden"
                },
                ref: previewRef,
                children: !header.isPlaceholder && header.column.getCanPin() && /*#__PURE__*/ (0, $4MPRY$jsxs)((0, $4MPRY$Fragment), {
                    children: [
                        header.column.getIsPinned() !== "left" ? /*#__PURE__*/ (0, $4MPRY$jsx)("button", {
                            className: "btn btn-link btn-xs",
                            style: {
                                color: "#ddd"
                            },
                            onClick: (e)=>{
                                e.stopPropagation();
                                header.column.pin("left");
                            },
                            children: /*#__PURE__*/ (0, $4MPRY$jsx)("span", {
                                className: "glyphicon glyphicon-chevron-left",
                                "aria-hidden": "true"
                            })
                        }) : /*#__PURE__*/ (0, $4MPRY$jsx)((0, $f5a76ed59462d3b3$export$2e2bcd8739ae039), {
                            header: header
                        }),
                        children,
                        header.column.getIsPinned() !== "right" ? /*#__PURE__*/ (0, $4MPRY$jsx)("button", {
                            className: "btn btn-link btn-xs",
                            style: {
                                color: "#ddd"
                            },
                            onClick: (e)=>{
                                e.stopPropagation();
                                header.column.pin("right");
                            },
                            children: /*#__PURE__*/ (0, $4MPRY$jsx)("span", {
                                className: "glyphicon glyphicon-chevron-right",
                                "aria-hidden": "true"
                            })
                        }) : /*#__PURE__*/ (0, $4MPRY$jsx)((0, $f5a76ed59462d3b3$export$2e2bcd8739ae039), {
                            header: header
                        })
                    ]
                })
            })
        }, `${header.id}_headerCellPin`)
    });
}


function $734affc20df3030b$var$HeaderCell({ header: header , table: table  }) {
    const className = `${header.column.getIsSorted()} sortable`;
    return /*#__PURE__*/ (0, $4MPRY$jsxs)("th", {
        colSpan: header.colSpan,
        className: header.column.getCanSort() ? className : undefined,
        style: {
            width: header.getSize(),
            maxWidth: header.getSize(),
            wordWrap: "break-word",
            position: "relative"
        },
        onClick: header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined,
        children: [
            /*#__PURE__*/ (0, $4MPRY$jsx)((0, $b9c565d9f4f0468f$export$2e2bcd8739ae039), {
                table: table,
                header: header,
                children: header.isPlaceholder ? null : (0, $4MPRY$flexRender)(header.column.columnDef.header, header.getContext())
            }, `${header.id}_headerTools`),
            /*#__PURE__*/ (0, $4MPRY$jsx)("div", {
                onClick: (e)=>e.stopPropagation(),
                onMouseDown: header.getResizeHandler(),
                onTouchStart: header.getResizeHandler(),
                className: `resizer ${header.column.getIsResizing() ? "isResizing" : ""}`
            })
        ]
    });
}
var $734affc20df3030b$export$2e2bcd8739ae039 = $734affc20df3030b$var$HeaderCell;


function $904b63de7398bbb7$var$HeaderRow({ headerGroup: headerGroup , table: table  }) {
    return /*#__PURE__*/ (0, $4MPRY$jsx)("tr", {
        children: headerGroup.headers.map((header)=>/*#__PURE__*/ (0, $4MPRY$jsx)((0, $734affc20df3030b$export$2e2bcd8739ae039), {
                table: table,
                header: header
            }, `${header.id}_headerCell`))
    });
}
var $904b63de7398bbb7$export$2e2bcd8739ae039 = $904b63de7398bbb7$var$HeaderRow;


function $f7a34b249400f841$var$HeaderGroup({ headerGroup: headerGroup , table: table  }) {
    return /*#__PURE__*/ (0, $4MPRY$jsxs)((0, $4MPRY$Fragment), {
        children: [
            /*#__PURE__*/ (0, $4MPRY$jsx)((0, $904b63de7398bbb7$export$2e2bcd8739ae039), {
                headerGroup: headerGroup,
                table: table
            }),
            /*#__PURE__*/ (0, $4MPRY$jsx)((0, $130822d1fadad788$export$2e2bcd8739ae039), {
                headerGroup: headerGroup,
                table: table
            })
        ]
    });
}
var $f7a34b249400f841$export$2e2bcd8739ae039 = $f7a34b249400f841$var$HeaderGroup;


function $61ce190e6b4a8993$var$TableHead({ table: table  }) {
    return /*#__PURE__*/ (0, $4MPRY$jsx)("thead", {
        children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ (0, $4MPRY$jsx)((0, $f7a34b249400f841$export$2e2bcd8739ae039), {
                headerGroup: headerGroup,
                table: table
            }, headerGroup.id))
    });
}
var $61ce190e6b4a8993$export$2e2bcd8739ae039 = $61ce190e6b4a8993$var$TableHead;


function $a61472dcff7c0633$var$Table({ cellProps: cellProps , rowProps: rowProps , table: table , tableProps: tableProps  }) {
    return /*#__PURE__*/ (0, $4MPRY$jsx)((0, $4MPRY$DndProvider), {
        backend: (0, $4MPRY$HTML5Backend),
        children: /*#__PURE__*/ (0, $4MPRY$jsxs)("table", {
            className: "react-table-bs3 table table-condensed table-bordered",
            ...tableProps(table),
            children: [
                /*#__PURE__*/ (0, $4MPRY$jsx)((0, $61ce190e6b4a8993$export$2e2bcd8739ae039), {
                    table: table
                }),
                /*#__PURE__*/ (0, $4MPRY$jsx)((0, $8f7210c3d51ef797$export$2e2bcd8739ae039), {
                    table: table,
                    cellProps: cellProps,
                    rowProps: rowProps
                })
            ]
        })
    });
}
var $a61472dcff7c0633$export$2e2bcd8739ae039 = $a61472dcff7c0633$var$Table;


function $f4f3291dfd202833$var$DataTableView({ cellProps: cellProps , loading: loading , loadingOffset: loadingOffset , rowProps: rowProps , table: table , tableProps: tableProps , viewRef: viewRef  }) {
    return /*#__PURE__*/ (0, $4MPRY$jsxs)("div", {
        ref: viewRef,
        style: {
            overflowX: loading ? "hidden" : "auto",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, $4MPRY$jsx)((0, $a79c5d361a825d07$export$2e2bcd8739ae039), {
                loading: loading,
                loadingOffset: loadingOffset
            }),
            /*#__PURE__*/ (0, $4MPRY$jsx)((0, $a61472dcff7c0633$export$2e2bcd8739ae039), {
                cellProps: cellProps,
                rowProps: rowProps,
                table: table,
                tableProps: tableProps
            })
        ]
    });
}
var $f4f3291dfd202833$export$2e2bcd8739ae039 = $f4f3291dfd202833$var$DataTableView;




function $df0bbfd326ffd1b6$var$GroupingButton({ row: row  }) {
    return /*#__PURE__*/ (0, $4MPRY$jsx)("button", {
        type: "button",
        onClick: row.getToggleExpandedHandler(),
        className: "btn btn-default",
        style: {
            cursor: "pointer"
        },
        children: row.getIsExpanded() ? /*#__PURE__*/ (0, $4MPRY$jsx)("span", {
            className: "glyphicon glyphicon-remove-sign",
            "aria-hidden": "true"
        }) : /*#__PURE__*/ (0, $4MPRY$jsx)("span", {
            className: "glyphicon glyphicon-duplicate",
            "aria-hidden": "true"
        })
    });
}
var $df0bbfd326ffd1b6$export$2e2bcd8739ae039 = $df0bbfd326ffd1b6$var$GroupingButton;



function $090815f5086f7f29$var$BootstrapTable({ cellProps: cellProps = ()=>{} , loading: loading , loadingOffset: loadingOffset , requestedPage: requestedPage , rowProps: rowProps = ()=>{} , setRequestedPage: setRequestedPage , table: table , tableProps: tableProps = ()=>{} , viewRef: viewRef  }) {
    return table ? /*#__PURE__*/ (0, $4MPRY$jsxs)((0, $4MPRY$Fragment), {
        children: [
            /*#__PURE__*/ (0, $4MPRY$jsx)((0, $f4f3291dfd202833$export$2e2bcd8739ae039), {
                cellProps: cellProps,
                loading: loading,
                loadingOffset: loadingOffset,
                rowProps: rowProps,
                table: table,
                tableProps: tableProps,
                viewRef: viewRef
            }),
            /*#__PURE__*/ (0, $4MPRY$jsx)((0, $4aa40443a491d05e$export$2e2bcd8739ae039), {
                loading: loading,
                requestedPage: requestedPage,
                setRequestedPage: setRequestedPage,
                table: table
            })
        ]
    }) : null;
}
var $090815f5086f7f29$export$2e2bcd8739ae039 = $090815f5086f7f29$var$BootstrapTable;


export {$090815f5086f7f29$export$2e2bcd8739ae039 as default, $df0bbfd326ffd1b6$export$2e2bcd8739ae039 as GroupingButton, $76592b60f149be3e$export$9d9ea8dbe2f59d9a as tableFilter, $76592b60f149be3e$export$95551f3ba34233a8 as valueFilter};
//# sourceMappingURL=main.js.map
