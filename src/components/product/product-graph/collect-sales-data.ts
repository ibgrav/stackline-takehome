import { MONTHS_SHORT } from "@/lib/constants";
import { ProductDataSale } from "@/types/product";

export function collectSalesData(sales?: Array<ProductDataSale>) {
  if (!sales || !Array.isArray(sales)) return [];

  const data: Array<[sales: number, margin: number]> = [];

  sales.forEach((sale) => {
    const index = new Date(sale.weekEnding).getMonth();

    if (!data[index]) data[index] = [0, 0];

    data[index]![0] += sale.retailSales;
    data[index]![1] += sale.retailerMargin;
  });

  return data.map(([sales, margin], index) => {
    return { month: MONTHS_SHORT[index], sales, margin };
  });
}
