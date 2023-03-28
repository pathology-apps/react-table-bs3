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
                "accessorKey": "id",
                "header": "ID",
                "width": 60
              },
              {
                "accessorKey": "name",
                "header": "Name",
                "width": 150
              },
              {
                "accessorKey": "age",
                "header": "Age",
                "width": 80
              },
              {
                "accessorKey": "gender",
                "header": "Gender",
                "width": 80
              },
              {
                "accessorKey": "email",
                "header": "Email",
                "width": 200
              },
              {
                "accessorKey": "phone",
                "header": "Phone",
                "width": 120
              },
              {
                "accessorKey": "address",
                "header": "Address",
                "width": 250
              },
              {
                "accessorKey": "income",
                "header": "Income",
                "width": 100,
                "align": "right",
              },
              {
                "accessorKey": "height",
                "header": "Height",
                "width": 80,
                "align": "right"
              },
              {
                "accessorKey": "weight",
                "header": "Weight",
                "width": 80,
                "align": "right"
              },
              {
                "accessorKey": "hobbies",
                "header": "Hobbies",
                "width": 200,
              },
              {
                "accessorKey": "active",
                "header": "Active",
                "width": 80,
                "align": "center",
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