import { useState } from "react";
import { cn } from "@/lib/cn";
import { useTypedSelector } from "@/store/store-hooks";
import { SortingState, flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { getColumnTextAlign, productTableColumns } from "./product-table-columns";

interface ProductTableProps {
  className?: string;
}

export function ProductTable({ className }: ProductTableProps) {
  const { data } = useTypedSelector((state) => state.product);

  const [sorting, setSorting] = useState<SortingState>([{ id: "weekEnding", desc: false }]);

  const table = useReactTable({
    columns: productTableColumns,
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

        <tbody className="text-gray-500 font-mono">
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
