import { useState } from "react";
import { cn } from "@/lib/cn";
import { useTypedSelector } from "@/store/store-hooks";
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
import { formatDateNum } from "./format-date-num";

const columnHelper = createColumnHelper<ProductDataSale>();

// some data types require left vs. right alignment (such as dates)
type ColumnMeta = {
  align: string;
};
function getColumnTextAlign(column: Column<ProductDataSale>) {
  return (column.columnDef.meta as ColumnMeta | undefined)?.align ?? "text-right";
}

const columns = [
  columnHelper.accessor("weekEnding", {
    header: "WEEK ENDING",
    meta: { align: "text-left" } satisfies ColumnMeta,
    cell: (info) => {
      try {
        const date = new Date(info.getValue());
        return `${formatDateNum(date.getMonth() + 1)}-${formatDateNum(date.getDate())}-${formatDateNum(date.getFullYear())}`;
      } catch (e) {
        console.error(e);
        // todo: better error handling of an invalid date
        return "";
      }
    }
  }),
  columnHelper.accessor("retailSales", {
    header: "RETAIL SALES",
    // to local string allows for nicer formatting of numbers
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
  const { data } = useTypedSelector((state) => state.product);

  const [sorting, setSorting] = useState<SortingState>([{ id: "weekEnding", desc: false }]);

  const table = useReactTable({
    columns,
    state: { sorting },
    data: data.sales ?? [],
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel()
  });

  return (
    <div className={cn("shadow px-4 w-full overflow-scroll", className)}>
      {/* scroll on smaller screens to keep table data readable */}
      <table className="w-full text-sm min-w-[690px]">
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
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={getColumnTextAlign(cell.column)}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
