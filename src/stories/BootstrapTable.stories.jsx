import BootstrapTable from ".."
import {
    getCoreRowModel,
    getExpandedRowModel,
    getFilteredRowModel,
    getGroupedRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table'
import data from './assets/countries.json'
import "./BootstrapTable.css"

export const Default = () => {
    const table = useReactTable({
        data,
        columns: [{
            header: 'Country Name',
            accessorKey: 'name',
        }, {
            header: 'Country Code',
            accessorKey: 'code',
        }],
        columnResizeMode: 'onChange',
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        getGroupedRowModel: getGroupedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
    })
    
    return <BootstrapTable table={table} />
}

export default {
    title: "BootstrapTable",
}