import { useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { collectSalesData } from "./collect-sales-data";
import { useTypedSelector } from "@/store/store-hooks";
import { cn } from "@/lib/cn";

interface ProductGraphProps {
  className?: string;
}

export function ProductGraph({ className }: ProductGraphProps) {
  const { data } = useTypedSelector((state) => state.product);

  const salesData = useMemo(() => collectSalesData(data.sales), [data]);

  return (
    <div className={cn("px-4 pt-4 shadow", className)}>
      <label>Retail Sales</label>

      <div className="w-full overflow-scroll pb-4">
        <ResponsiveContainer height={500} minWidth={690}>
          <LineChart data={salesData} margin={{ left: 20, right: 20 }}>
            <Line
              type="monotone"
              dataKey="sales"
              stroke="rgb(55,147,244)"
              strokeWidth={3}
              dot={false}
              isAnimationActive={false}
            />
            <Line
              type="monotone"
              dataKey="margin"
              stroke="rgb(136,148,176)"
              strokeWidth={3}
              dot={false}
              isAnimationActive={false}
            />
            <YAxis width={0} domain={([, max]) => [0 - max, max * 2]} />
            <XAxis dataKey="month" type="category" tickLine={false} stroke="rgb(156,163,175)" tickMargin={12} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
