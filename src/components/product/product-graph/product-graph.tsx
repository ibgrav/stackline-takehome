import { useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

import { collectSalesData } from "./collect-sales-data";
import { useProduct } from "@/store/use-product";

export function ProductGraph() {
  const data = useProduct();
  const salesData = useMemo(() => collectSalesData(data.sales), [data]);

  return (
    <div className="p-4 shadow w-full">
      <label>Retail Sales</label>

      <ResponsiveContainer height={500}>
        <LineChart data={salesData} margin={{ left: 20, right: 20 }}>
          <Line type="monotone" dataKey="sales" stroke="rgb(55,147,244)" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="margin" stroke="rgb(136,148,176)" strokeWidth={3} dot={false} />
          <YAxis width={0} domain={([, max]) => [0 - max, max * 2]} />
          <XAxis dataKey="month" type="category" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
