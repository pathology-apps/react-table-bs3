require("./main.css");
var $gXNCa$reactjsxruntime = require("react/jsx-runtime");
var $gXNCa$react = require("react");
var $gXNCa$proptypes = require("prop-types");
var $gXNCa$reactdnd = require("react-dnd");
var $gXNCa$reactdndhtml5backend = require("react-dnd-html5-backend");
var $gXNCa$tanstackreacttable = require("@tanstack/react-table");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $4fa36e821943b400$export$2e2bcd8739ae039);
$parcel$export(module.exports, "tableFilter", () => $125a85f138d8a4a2$export$9d9ea8dbe2f59d9a);
$parcel$export(module.exports, "valueFilter", () => $125a85f138d8a4a2$export$95551f3ba34233a8);
$parcel$export(module.exports, "GroupingButton", () => $c1dc35055a36ee94$export$2e2bcd8739ae039);









function $13ef7f0473e481e2$var$LoadingScreen({ loading: loading , loadingOffset: loadingOffset  }) {
    if (!loading) return null;
    const className = `loading ${loading ? "progress" : ""}`;
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("div", {
        className: className,
        style: {
            left: loadingOffset
        },
        children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)("span", {
            children: [
                "Loading",
                /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("span", {
                    className: "one",
                    children: "."
                }),
                /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("span", {
                    className: "two",
                    children: "."
                }),
                /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("span", {
                    className: "three",
                    children: "."
                })
            ]
        })
    });
}
$13ef7f0473e481e2$var$LoadingScreen.propTypes = {
    loading: (0, ($parcel$interopDefault($gXNCa$proptypes))).bool,
    loadingOffset: (0, ($parcel$interopDefault($gXNCa$proptypes))).number
};
var $13ef7f0473e481e2$export$2e2bcd8739ae039 = $13ef7f0473e481e2$var$LoadingScreen;






















function $2f255ee1acdf2141$export$2e2bcd8739ae039({ header: header  }) {
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("button", {
        className: "btn btn-link btn-xs",
        onClick: (e)=>{
            e.stopPropagation();
            header.column.pin(false);
        },
        children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("span", {
            style: {
                color: "#337ab7"
            },
            className: "glyphicon glyphicon-pushpin",
            "aria-hidden": "true"
        })
    });
}


const $e08f3ccbd063a785$var$reorderColumn = (draggedColumnId, targetColumnId, columnOrder)=>{
    columnOrder.splice(columnOrder.indexOf(targetColumnId), 0, columnOrder.splice(columnOrder.indexOf(draggedColumnId), 1)[0]);
    return [
        ...columnOrder
    ];
};
function $e08f3ccbd063a785$export$2e2bcd8739ae039({ header: header , table: table , children: children  }) {
    const { getState: getState , setColumnOrder: setColumnOrder  } = table;
    const { columnOrder: columnOrder  } = getState();
    const { column: column  } = header;
    const [, dropRef] = (0, $gXNCa$reactdnd.useDrop)({
        accept: "column",
        drop: (draggedColumn)=>{
            const newColumnOrder = $e08f3ccbd063a785$var$reorderColumn(draggedColumn.id, column.id, columnOrder);
            setColumnOrder(newColumnOrder);
        }
    });
    const [{ isDragging: isDragging  }, dragRef, previewRef] = (0, $gXNCa$reactdnd.useDrag)({
        collect: (monitor)=>({
                isDragging: monitor.isDragging()
            }),
        item: ()=>column,
        type: "column"
    });
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("div", {
        ref: dragRef,
        children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("div", {
            ref: dropRef,
            colSpan: header.colSpan,
            style: {
                opacity: isDragging ? 0.5 : 1,
                width: "100%"
            },
            children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    overflow: "hidden"
                },
                ref: previewRef,
                children: !header.isPlaceholder && header.column.getCanPin() && /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)((0, $gXNCa$reactjsxruntime.Fragment), {
                    children: [
                        header.column.getIsPinned() !== "left" ? /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("button", {
                            className: "btn btn-link btn-xs",
                            style: {
                                color: "#ddd"
                            },
                            onClick: (e)=>{
                                e.stopPropagation();
                                header.column.pin("left");
                            },
                            children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("span", {
                                className: "glyphicon glyphicon-chevron-left",
                                "aria-hidden": "true"
                            })
                        }) : /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $2f255ee1acdf2141$export$2e2bcd8739ae039), {
                            header: header
                        }),
                        children,
                        header.column.getIsPinned() !== "right" ? /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("button", {
                            className: "btn btn-link btn-xs",
                            style: {
                                color: "#ddd"
                            },
                            onClick: (e)=>{
                                e.stopPropagation();
                                header.column.pin("right");
                            },
                            children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("span", {
                                className: "glyphicon glyphicon-chevron-right",
                                "aria-hidden": "true"
                            })
                        }) : /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $2f255ee1acdf2141$export$2e2bcd8739ae039), {
                            header: header
                        })
                    ]
                })
            })
        }, `${header.id}_headerCellPin`)
    });
}



function $09b54aa5e2e7fc75$var$HeaderCell({ table: table , header: header  }) {
    const className = `${header.column.getIsSorted()} sortable`;
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)("th", {
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
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $e08f3ccbd063a785$export$2e2bcd8739ae039), {
                table: table,
                header: header,
                children: header.isPlaceholder ? null : (0, $gXNCa$tanstackreacttable.flexRender)(header.column.columnDef.header, header.getContext())
            }, `${header.id}_headerTools`),
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("div", {
                onClick: (e)=>e.stopPropagation(),
                onMouseDown: header.getResizeHandler(),
                onTouchStart: header.getResizeHandler(),
                className: `resizer ${header.column.getIsResizing() ? "isResizing" : ""}`
            })
        ]
    });
}
$09b54aa5e2e7fc75$var$HeaderCell.propTypes = {
    header: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired
};
var $09b54aa5e2e7fc75$export$2e2bcd8739ae039 = $09b54aa5e2e7fc75$var$HeaderCell;


function $8f40fd94b98e2faf$var$HeaderRow({ headerGroup: headerGroup , table: table  }) {
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("tr", {
        children: headerGroup.headers.map((header)=>/*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $09b54aa5e2e7fc75$export$2e2bcd8739ae039), {
                table: table,
                header: header
            }, `${header.id}_headerCell`))
    });
}
$8f40fd94b98e2faf$var$HeaderRow.propTypes = {
    headerGroup: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired
};
var $8f40fd94b98e2faf$export$2e2bcd8739ae039 = $8f40fd94b98e2faf$var$HeaderRow;




















function $bdfab28ad4b1f309$var$DebouncedInput({ value: initialValue , onChange: onChange , debounce: debounce = 500 , ...props }) {
    const [value, setValue] = (0, $gXNCa$react.useState)(initialValue);
    (0, $gXNCa$react.useEffect)(()=>{
        setValue(initialValue);
    }, [
        initialValue
    ]);
    (0, $gXNCa$react.useEffect)(()=>{
        const timeout = setTimeout(()=>{
            onChange(value);
        }, debounce);
        return ()=>clearTimeout(timeout);
    }, [
        value
    ]);
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("input", {
        ...props,
        value: value,
        onChange: (e)=>setValue(e.target.value)
    });
}
$bdfab28ad4b1f309$var$DebouncedInput.propTypes = {
    value: (0, ($parcel$interopDefault($gXNCa$proptypes))).string.isRequired,
    onChange: (0, ($parcel$interopDefault($gXNCa$proptypes))).func.isRequired,
    debounce: (0, ($parcel$interopDefault($gXNCa$proptypes))).number
};
var $bdfab28ad4b1f309$export$2e2bcd8739ae039 = $bdfab28ad4b1f309$var$DebouncedInput;


function $d95f3d6ee5389fd5$var$Filter({ column: column  }) {
    const columnFilterValue = column.getFilterValue();
    if (!column.getCanFilter()) return null;
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $bdfab28ad4b1f309$export$2e2bcd8739ae039), {
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
$d95f3d6ee5389fd5$var$Filter.propTypes = {
    column: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired
};
var $d95f3d6ee5389fd5$export$2e2bcd8739ae039 = $d95f3d6ee5389fd5$var$Filter;


function $e4b55be42d42b24f$var$GroupedHeader({ header: header , table: table  }) {
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)((0, $gXNCa$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $d95f3d6ee5389fd5$export$2e2bcd8739ae039), {
                column: header.column,
                table: table
            }),
            header.column.getCanGroup() ? /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("span", {
                className: "input-group-btn",
                children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("button", {
                    type: "button",
                    className: "btn btn-default",
                    onClick: header.column.getToggleGroupingHandler(),
                    style: {
                        cursor: "pointer"
                    },
                    children: header.column.getIsGrouped() ? /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("span", {
                        className: "glyphicon glyphicon-remove-sign",
                        "aria-hidden": "true"
                    }) : /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("span", {
                        className: "glyphicon glyphicon-duplicate",
                        "aria-hidden": "true"
                    })
                })
            }) : null
        ]
    });
}
$e4b55be42d42b24f$var$GroupedHeader.propTypes = {
    header: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired,
    table: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired
};
var $e4b55be42d42b24f$export$2e2bcd8739ae039 = $e4b55be42d42b24f$var$GroupedHeader;


function $595a48911cfa1a11$var$FilteredHeader({ header: header , table: table  }) {
    return header.column.getCanGroup() ? /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("div", {
        className: "input-group",
        children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $e4b55be42d42b24f$export$2e2bcd8739ae039), {
            header: header,
            table: table
        })
    }) : /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $e4b55be42d42b24f$export$2e2bcd8739ae039), {
        header: header,
        table: table
    });
}
$595a48911cfa1a11$var$FilteredHeader.propTypes = {
    header: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired,
    table: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired
};
var $595a48911cfa1a11$export$2e2bcd8739ae039 = $595a48911cfa1a11$var$FilteredHeader;


function $8e46f893e4a0991d$var$FilteredHeaderCell({ header: header , table: table  }) {
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("th", {
        colSpan: header.colSpan,
        style: {
            width: header.getSize(),
            maxWidth: header.getSize(),
            wordWrap: "break-word",
            position: "relative"
        },
        children: header.column.getCanFilter() ? /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $595a48911cfa1a11$export$2e2bcd8739ae039), {
            header: header,
            table: table
        }) : null
    });
}
$8e46f893e4a0991d$var$FilteredHeaderCell.propTypes = {
    header: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired,
    table: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired
};
var $8e46f893e4a0991d$export$2e2bcd8739ae039 = $8e46f893e4a0991d$var$FilteredHeaderCell;


function $5c8c3a5ac16dccd8$var$FilteredHeaderRow({ headerGroup: headerGroup , table: table  }) {
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("tr", {
        children: headerGroup.headers.map((header)=>/*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $8e46f893e4a0991d$export$2e2bcd8739ae039), {
                header: header,
                table: table
            }, `${header.id}_filterCell`))
    }, `${headerGroup.i}_filter`);
}
$5c8c3a5ac16dccd8$var$FilteredHeaderRow.propTypes = {
    headerGroup: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired,
    table: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired
};
var $5c8c3a5ac16dccd8$export$2e2bcd8739ae039 = $5c8c3a5ac16dccd8$var$FilteredHeaderRow;


function $fc691d32f71c7289$var$HeaderGroup({ headerGroup: headerGroup , table: table  }) {
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)((0, $gXNCa$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $8f40fd94b98e2faf$export$2e2bcd8739ae039), {
                headerGroup: headerGroup,
                table: table
            }),
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $5c8c3a5ac16dccd8$export$2e2bcd8739ae039), {
                headerGroup: headerGroup,
                table: table
            })
        ]
    });
}
$fc691d32f71c7289$var$HeaderGroup.propTypes = {
    headerGroup: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired,
    table: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired
};
var $fc691d32f71c7289$export$2e2bcd8739ae039 = $fc691d32f71c7289$var$HeaderGroup;


function $56285dbff689bb79$var$TableHead({ table: table  }) {
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("thead", {
        children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $fc691d32f71c7289$export$2e2bcd8739ae039), {
                headerGroup: headerGroup,
                table: table
            }, headerGroup.id))
    });
}
$56285dbff689bb79$var$TableHead.propTypes = {
    table: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired
};
var $56285dbff689bb79$export$2e2bcd8739ae039 = $56285dbff689bb79$var$TableHead;












function $e351aac700bc7968$var$TableCell({ cell: cell , row: row  }) {
    // For cells with repeated values, render null
    // Otherwise, just render the regular cell
    let cellRender = (0, $gXNCa$tanstackreacttable.flexRender)(cell.column.columnDef.cell, cell.getContext());
    if (cell.getIsGrouped()) // If it's a grouped cell, add an expander and row count
    cellRender = /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)("button", {
        type: "button",
        onClick: row.getToggleExpandedHandler(),
        style: {
            cursor: row.getCanExpand() ? "pointer" : "normal"
        },
        children: [
            (0, $gXNCa$tanstackreacttable.flexRender)(cell.column.columnDef.cell, cell.getContext()),
            "\xa0 (",
            row.subRows.length,
            ")"
        ]
    });
    if (cell.getIsAggregated()) // If the cell is aggregated, use the Aggregated
    // renderer for cell
    cellRender = (0, $gXNCa$tanstackreacttable.flexRender)(cell.column.columnDef.aggregatedCell ?? cell.column.columnDef.cell, cell.getContext());
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("td", {
        style: {
            width: cell.column.getSize(),
            maxWidth: cell.column.getSize(),
            wordWrap: "break-word",
            color: "#444",
            background: cell.row.index % 2 === 0 ? "#fff" : "#f9f9f9"
        },
        children: cellRender
    });
}
$e351aac700bc7968$var$TableCell.propTypes = {
    cell: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired,
    row: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired
};
var $e351aac700bc7968$export$2e2bcd8739ae039 = $e351aac700bc7968$var$TableCell;


function $cc4764bcb2dbe5fa$var$TableRow({ row: row , rowProps: rowProps  }) {
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("tr", {
        ...rowProps(row),
        children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $e351aac700bc7968$export$2e2bcd8739ae039), {
                cell: cell,
                row: row
            }, `${cell.id}_tableCell`))
    });
}
$cc4764bcb2dbe5fa$var$TableRow.propTypes = {
    row: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired
};
var $cc4764bcb2dbe5fa$export$2e2bcd8739ae039 = $cc4764bcb2dbe5fa$var$TableRow;


function $189fb20378fd77c6$var$TableBody({ table: table , rowProps: rowProps  }) {
    const rowModel = table.getRowModel();
    if (!rowModel?.rows?.length) return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("tbody", {});
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("tbody", {
        children: table.getRowModel().rows.map((row)=>/*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $cc4764bcb2dbe5fa$export$2e2bcd8739ae039), {
                row: row,
                rowProps: rowProps
            }, `${row.id}_tableRow`))
    });
}
$189fb20378fd77c6$var$TableBody.propTypes = {
    table: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired
};
var $189fb20378fd77c6$export$2e2bcd8739ae039 = $189fb20378fd77c6$var$TableBody;




function $55ada0eb9df9d5ef$var$Table({ table: table , rowProps: rowProps  }) {
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $gXNCa$reactdnd.DndProvider), {
        backend: (0, $gXNCa$reactdndhtml5backend.HTML5Backend),
        children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)("table", {
            className: "react-table-bs3 table table-condensed table-bordered",
            children: [
                /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $56285dbff689bb79$export$2e2bcd8739ae039), {
                    table: table
                }),
                /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $189fb20378fd77c6$export$2e2bcd8739ae039), {
                    table: table,
                    rowProps: rowProps
                })
            ]
        })
    });
}
$55ada0eb9df9d5ef$var$Table.propTypes = {
    table: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired
};
var $55ada0eb9df9d5ef$export$2e2bcd8739ae039 = $55ada0eb9df9d5ef$var$Table;


function $897ab80ac9cafe91$var$DataTableView({ viewRef: viewRef , loading: loading , loadingOffset: loadingOffset , table: table , rowProps: rowProps  }) {
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)("div", {
        ref: viewRef,
        style: {
            overflowX: loading ? "hidden" : "auto",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $13ef7f0473e481e2$export$2e2bcd8739ae039), {
                loading: loading,
                loadingOffset: loadingOffset
            }),
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $55ada0eb9df9d5ef$export$2e2bcd8739ae039), {
                table: table,
                rowProps: rowProps
            })
        ]
    });
}
$897ab80ac9cafe91$var$DataTableView.propTypes = {
    viewRef: (0, ($parcel$interopDefault($gXNCa$proptypes))).object,
    loading: (0, ($parcel$interopDefault($gXNCa$proptypes))).bool,
    loadingOffset: (0, ($parcel$interopDefault($gXNCa$proptypes))).number,
    table: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired
};
var $897ab80ac9cafe91$export$2e2bcd8739ae039 = $897ab80ac9cafe91$var$DataTableView;








function $b0e17dedfdca18cb$var$PreviousButton({ table: table , loading: loading  }) {
    // If loading is undefined, set it to false:
    loading = loading || false;
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("button", {
        type: "button",
        className: table.getCanPreviousPage() && loading === false ? "btn btn-primary btn-block" : "btn btn-block disabled",
        onClick: ()=>table.getCanPreviousPage() && table.previousPage(),
        children: "Previous"
    });
}
$b0e17dedfdca18cb$var$PreviousButton.propTypes = {
    table: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired,
    loading: (0, ($parcel$interopDefault($gXNCa$proptypes))).bool
};
var $b0e17dedfdca18cb$export$2e2bcd8739ae039 = $b0e17dedfdca18cb$var$PreviousButton;





function $7a56fabb9a6fd445$var$NextButton({ table: table , loading: loading  }) {
    // If loading is undefined, set it to false:
    loading = loading || false;
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("button", {
        type: "button",
        className: table.getCanNextPage() && loading === false ? "btn btn-primary btn-block" : "btn btn-block disabled",
        onClick: ()=>table.getCanNextPage() && table.nextPage(),
        children: "Next"
    });
}
$7a56fabb9a6fd445$var$NextButton.propTypes = {
    table: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired,
    loading: (0, ($parcel$interopDefault($gXNCa$proptypes))).bool
};
var $7a56fabb9a6fd445$export$2e2bcd8739ae039 = $7a56fabb9a6fd445$var$NextButton;





function $e43006d4478e83c8$var$PageSelector({ requestedPage: requestedPage , table: table , setRequestedPage: setRequestedPage  }) {
    // requestedPage and setRequestedPage might be undefined if the table is not paginated on the server, so we need to make local state to track the [requestedPage, setRequestedPage] state.
    const [localRequestedPage, setLocalRequestedPage] = (0, $gXNCa$react.useState)(1);
    // If requestedPage is undefined, we use the localRequestedPage state.
    const finalRequestedPage = requestedPage === undefined ? localRequestedPage : requestedPage;
    // If setRequestedPage is undefined, we use the setLocalRequestedPage function.
    const finalSetRequestedPage = setRequestedPage === undefined ? setLocalRequestedPage : setRequestedPage;
    (0, $gXNCa$react.useEffect)(()=>{
        setLocalRequestedPage(table.getState().pagination.pageIndex + 1);
    }, [
        table.getState().pagination.pageIndex
    ]);
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)("span", {
        children: [
            "Page",
            " ",
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("input", {
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
$e43006d4478e83c8$var$PageSelector.propTypes = {
    requestedPage: (0, ($parcel$interopDefault($gXNCa$proptypes))).number,
    table: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired,
    setRequestedPage: (0, ($parcel$interopDefault($gXNCa$proptypes))).func
};
var $e43006d4478e83c8$export$2e2bcd8739ae039 = $e43006d4478e83c8$var$PageSelector;





function $db66f56970dc2999$var$PageSizeSelector({ table: table  }) {
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("select", {
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
        ].map((pageSize)=>/*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)("option", {
                value: pageSize,
                children: [
                    pageSize,
                    " rows"
                ]
            }, pageSize))
    });
}
$db66f56970dc2999$var$PageSizeSelector.propTypes = {
    table: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired
};
var $db66f56970dc2999$export$2e2bcd8739ae039 = $db66f56970dc2999$var$PageSizeSelector;


function $00fb4e70fc0faafb$var$DataFooter({ table: table , loading: loading , requestedPage: requestedPage , setRequestedPage: setRequestedPage  }) {
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("div", {
        className: "well well-sm",
        children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("div", {
            className: "row",
            children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("div", {
                className: "col col-xs-12",
                children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)("div", {
                    style: {
                        display: "flex",
                        gap: ".5em",
                        justifyContent: "space-evenly"
                    },
                    children: [
                        /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("div", {
                            style: {
                                display: "contents"
                            },
                            children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $b0e17dedfdca18cb$export$2e2bcd8739ae039), {
                                table: table,
                                loading: loading
                            })
                        }),
                        /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("div", {
                            style: {
                                minWidth: "200px",
                                display: "flex",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $e43006d4478e83c8$export$2e2bcd8739ae039), {
                                table: table,
                                requestedPage: requestedPage,
                                setRequestedPage: setRequestedPage
                            })
                        }),
                        /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("div", {
                            style: {
                                minWidth: "200px",
                                display: "flex",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $db66f56970dc2999$export$2e2bcd8739ae039), {
                                table: table
                            })
                        }),
                        /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("div", {
                            style: {
                                display: "contents"
                            },
                            children: /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $7a56fabb9a6fd445$export$2e2bcd8739ae039), {
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
$00fb4e70fc0faafb$var$DataFooter.propTypes = {
    table: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired,
    loading: (0, ($parcel$interopDefault($gXNCa$proptypes))).bool,
    requestedPage: (0, ($parcel$interopDefault($gXNCa$proptypes))).number,
    setRequestedPage: (0, ($parcel$interopDefault($gXNCa$proptypes))).func
};
var $00fb4e70fc0faafb$export$2e2bcd8739ae039 = $00fb4e70fc0faafb$var$DataFooter;





function $c1dc35055a36ee94$var$GroupingButton({ row: row  }) {
    return /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("button", {
        type: "button",
        onClick: row.getToggleExpandedHandler(),
        className: "btn btn-default",
        style: {
            cursor: "pointer"
        },
        children: row.getIsExpanded() ? /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("span", {
            className: "glyphicon glyphicon-remove-sign",
            "aria-hidden": "true"
        }) : /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)("span", {
            className: "glyphicon glyphicon-duplicate",
            "aria-hidden": "true"
        })
    });
}
$c1dc35055a36ee94$var$GroupingButton.propTypes = {
    row: (0, ($parcel$interopDefault($gXNCa$proptypes))).object
};
var $c1dc35055a36ee94$export$2e2bcd8739ae039 = $c1dc35055a36ee94$var$GroupingButton;


// Checks any object, array, string, or integer exhaustively for a value
const $125a85f138d8a4a2$var$recursiveFilter = (concern, value)=>{
    if (Array.isArray(concern)) return concern.some((item)=>{
        if ($125a85f138d8a4a2$var$recursiveFilter(item, value)) return true;
        return false;
    });
    if (typeof concern === "object") {
        if (concern === null) return false;
        const keys = Object.keys(concern);
        return keys.some((key)=>{
            if ($125a85f138d8a4a2$var$recursiveFilter(concern[key], value)) return true;
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
const $125a85f138d8a4a2$export$9d9ea8dbe2f59d9a = (row, columnId, value)=>{
    let concern = row.original[columnId];
    if (!concern) concern = row.renderValue(columnId);
    return $125a85f138d8a4a2$var$recursiveFilter(concern, value);
};
const $125a85f138d8a4a2$export$95551f3ba34233a8 = (row, columnId, value)=>{
    const concern = row.renderValue(columnId);
    if (!concern || false) return false;
    // Check if concern contains value:
    if (concern.toLowerCase().includes(value.toLowerCase())) return true;
    return false;
};



function $4fa36e821943b400$var$BootstrapTable({ table: table , loading: loading , loadingOffset: loadingOffset , requestedPage: requestedPage , setRequestedPage: setRequestedPage , viewRef: viewRef , rowProps: rowProps  }) {
    return table ? /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsxs)((0, $gXNCa$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $897ab80ac9cafe91$export$2e2bcd8739ae039), {
                table: table,
                loading: loading,
                loadingOffset: loadingOffset,
                viewRef: viewRef,
                rowProps: rowProps
            }),
            /*#__PURE__*/ (0, $gXNCa$reactjsxruntime.jsx)((0, $00fb4e70fc0faafb$export$2e2bcd8739ae039), {
                table: table,
                requestedPage: requestedPage,
                setRequestedPage: setRequestedPage,
                loading: loading
            })
        ]
    }) : null;
}
$4fa36e821943b400$var$BootstrapTable.propTypes = {
    table: (0, ($parcel$interopDefault($gXNCa$proptypes))).object.isRequired,
    loading: (0, ($parcel$interopDefault($gXNCa$proptypes))).bool,
    loadingOffset: (0, ($parcel$interopDefault($gXNCa$proptypes))).number,
    requestedPage: (0, ($parcel$interopDefault($gXNCa$proptypes))).number,
    setRequestedPage: (0, ($parcel$interopDefault($gXNCa$proptypes))).func,
    viewRef: (0, ($parcel$interopDefault($gXNCa$proptypes))).object
};
var $4fa36e821943b400$export$2e2bcd8739ae039 = $4fa36e821943b400$var$BootstrapTable;


//# sourceMappingURL=main.js.map
