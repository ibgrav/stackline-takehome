import { expect, test } from "vitest";
import { MONTHS_SHORT } from "@/lib/constants";
import { collectSalesData } from "./collect-sales-data";
import { mockProductData } from "../product.mock";

test("collect sales data", () => {
  const data = collectSalesData(mockProductData.sales);

  data.forEach((item) => {
    // ensure a known month is set correctly
    expect(MONTHS_SHORT.includes(item.month!)).toBeTruthy();

    expect(item.sales).toBeTypeOf("number");
    expect(item.sales).toBeGreaterThan(0);

    expect(item.margin).toBeTypeOf("number");
    expect(item.margin).toBeGreaterThan(0);
  });
});
