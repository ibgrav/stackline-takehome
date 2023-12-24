import { Column, createColumnHelper } from "@tanstack/react-table";
import { ProductDataSale } from "@/types/product";
import { formatDateNum } from "./format-date-num";

const columnHelper = createColumnHelper<ProductDataSale>();

// some data types require left vs. right alignment (such as dates)
interface ColumnMeta {
  align: string;
}
export function getColumnTextAlign(column: Column<ProductDataSale>) {
  return (column.columnDef.meta as ColumnMeta | undefined)?.align ?? "text-right";
}

export const productTableColumns = [
  columnHelper.accessor("weekEnding", {
    header: "WEEK ENDING",
    meta: { align: "text-left" } satisfies ColumnMeta,
    cell: (info) => {
      try {
        const date = new Date(info.getValue());
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();

        return `${formatDateNum(month)}-${formatDateNum(day)}-${formatDateNum(year)}`;
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
