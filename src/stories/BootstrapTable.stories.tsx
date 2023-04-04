import React from "react";
import { BootstrapTable } from "..";
import {
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getGroupedRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { AccessorKeyColumnDef } from "@tanstack/table-core";
import data from "./assets/people.json";
import "./BootstrapTable.css";

interface Person {
  id: number;
  name: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  address: string;
  income: number;
  height: number;
  weight: number;
  hobbies: string[];
  active: boolean;
}

export const Default: React.FC = () => {
  const columns: AccessorKeyColumnDef<Person>[] = [
    {
      accessorKey: "id",
      header: "ID",
      size: 60,
    },
    {
      accessorKey: "name",
      header: "Name",
      size: 150,
    },
    {
      accessorKey: "age",
      header: "Age",
      size: 80,
    },
    {
      accessorKey: "gender",
      header: "Gender",
      size: 80,
    },
    {
      accessorKey: "email",
      header: "Email",
      size: 200,
    },
    {
      accessorKey: "phone",
      header: "Phone",
      size: 120,
    },
    {
      accessorKey: "address",
      header: "Address",
      size: 250,
    },
    {
      accessorKey: "income",
      header: "Income",
      size: 100,
    },
    {
      accessorKey: "height",
      header: "Height",
      size: 80,
    },
    {
      accessorKey: "weight",
      header: "Weight",
      size: 80,
    },
    {
      accessorKey: "hobbies",
      header: "Hobbies",
      size: 200,
    },
    {
      accessorKey: "active",
      header: "Active",
      size: 80,
    },
  ];
  const table = useReactTable({
    data,
    columns,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return <BootstrapTable table={table} />;
};

export default {
  title: "BootstrapTable",
};
