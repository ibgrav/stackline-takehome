import { MONTHS_SHORT } from "@/lib/constants";
import { ProductDataSale } from "@/types/product";

export function collectSalesData(sales?: ProductDataSale[]) {
  if (!sales || !Array.isArray(sales)) return [];

  // this will be a 12-length array of [sales, margin] tuples
  const data: [sales: number, margin: number][] = [];

  sales.forEach((sale) => {
    try {
      const index = new Date(sale.weekEnding).getMonth();

      if (!data[index]) data[index] = [0, 0];
      // don't like using non-null assertion here, but the initialization happens just above
      data[index]![0] += sale.retailSales;
      data[index]![1] += sale.retailerMargin;
    } catch (e) {
      console.error(e);
      // try/catch in case of invalid date
    }
  });

  return data.map(([sales, margin], index) => {
    // remap the data into an object that the table will understand
    return { month: MONTHS_SHORT[index], sales, margin };
  });
}
