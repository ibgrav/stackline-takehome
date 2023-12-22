import { cn } from "@/lib/cn";
import { useProduct } from "@/store/use-product";
import { ProductDataSale } from "@/types/product";
import {
  Column,
  SortingState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";
import { useState } from "react";

type ColumnMeta = {
  align: string;
};

const columnHelper = createColumnHelper<ProductDataSale>();

function getColumnTextAlign(column: Column<ProductDataSale>) {
  return (column.columnDef.meta as ColumnMeta | undefined)?.align ?? "text-right";
}

const format = (num: number): string => {
  if (num > 999) return num.toString().substring(2);
  if (num < 10) return `0${num}`;
  return num.toString();
};

const columns = [
  columnHelper.accessor("weekEnding", {
    header: "WEEK ENDING",
    meta: { align: "text-left" } satisfies ColumnMeta,
    cell: (info) => {
      const date = new Date(info.getValue());
      return `${format(date.getMonth() + 1)}-${format(date.getDate())}-${format(date.getFullYear())}`;
    }
  }),
  columnHelper.accessor("retailSales", {
    header: "RETAIL SALES",
    cell: (info) => `$${info.getValue().toLocaleString()}`
  }),
  columnHelper.accessor("wholesaleSales", {
    header: "WHOLESALE SALES",
    cell: (info) => `$${info.getValue().toLocaleString()}`
  }),
  columnHelper.accessor("unitsSold", {
    header: "UNITS SOLD",
    cell: (info) => info.getValue().toLocaleString()
  }),
  columnHelper.accessor("retailerMargin", {
    header: "RETAILER MARGIN",
    cell: (info) => `$${info.getValue().toLocaleString()}`
  })
];

interface ProductTableProps {
  className?: string;
}

export function ProductTable({ className }: ProductTableProps) {
  const [sorting, setSorting] = useState<SortingState>([{ id: "weekEnding", desc: false }]);

  const data = useProduct();

  const table = useReactTable({
    columns,
    state: { sorting },
    data: data.sales ?? [],
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel()
  });

  return (
    <div className={cn("shadow px-4", className)}>
      <table className="w-full text-sm">
        <thead className="h-16">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const sort = header.column.getIsSorted();

                return (
                  <th
                    key={header.id}
                    className={cn("font-normal cursor-pointer", getColumnTextAlign(header.column))}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    <span className="inline-block w-5 text-right">{sort === "asc" ? "↑" : sort === "desc" ? "↓" : "⇅"}</span>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>

        <tbody className="text-gray-400 font-mono">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={cn("border-t h-12")}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <td key={cell.id} className={getColumnTextAlign(cell.column)}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
