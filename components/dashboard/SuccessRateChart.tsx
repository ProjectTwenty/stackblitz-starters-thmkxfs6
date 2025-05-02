"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// Sample data matching the mockup
const data = [
  { date: "Apr 01", success: 0, failure: 0 },
  { date: "Apr 03", success: 0, failure: 0 },
  { date: "Apr 05", success: 0, failure: 0 },
  { date: "Apr 07", success: 0, failure: 0 },
  { date: "Apr 09", success: 0, failure: 0 },
  { date: "Apr 11", success: 0, failure: 0 },
  { date: "Apr 13", success: 0, failure: 0 },
  { date: "Apr 15", success: 85, failure: 15 },
  { date: "Apr 17", success: 90, failure: 10 },
  { date: "Apr 19", success: 95, failure: 5 },
  { date: "Apr 21", success: 90, failure: 10 },
  { date: "Apr 23", success: 95, failure: 5 },
  { date: "Apr 25", success: 100, failure: 0 },
  { date: "Apr 27", success: 100, failure: 0 },
  { date: "Apr 29", success: 100, failure: 0 },
  { date: "May 01", success: 100, failure: 0 },
];

export function SuccessRateChart() {
  return (
    <Card>
      <CardHeader className="flex-row items-center border-b pb-2 pt-6">
        <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
          <div className="h-6 w-6 rounded-full border-4 border-green-500" />
        </div>
        <CardTitle className="text-lg font-medium">Overall success rate</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              stackOffset="expand"
              margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tickFormatter={(tick) => `${tick * 100}%`}
                ticks={[0, 0.25, 0.5, 0.75, 1]}
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                formatter={(value, name) => {
                  return [`${(Number(value) * 100).toFixed(0)}%`, name === "success" ? "Success" : "Failure"];
                }}
                contentStyle={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  border: "none",
                }}
              />
              <Area
                type="monotone"
                dataKey="success"
                stackId="1"
                stroke="none"
                fill="#4ade80"
                fillOpacity={0.8}
              />
              <Area
                type="monotone"
                dataKey="failure"
                stackId="1"
                stroke="none"
                fill="#f87171"
                fillOpacity={0.8}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}