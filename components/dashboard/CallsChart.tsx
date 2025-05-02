"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// Sample data matching the mockup
const data = [
  { date: "Apr 01", calls: 0 },
  { date: "Apr 03", calls: 0 },
  { date: "Apr 05", calls: 0 },
  { date: "Apr 07", calls: 0 },
  { date: "Apr 09", calls: 0 },
  { date: "Apr 11", calls: 0 },
  { date: "Apr 13", calls: 0 },
  { date: "Apr 15", calls: 35 },
  { date: "Apr 17", calls: 140 },
  { date: "Apr 19", calls: 30 },
  { date: "Apr 21", calls: 120 },
  { date: "Apr 23", calls: 90 },
  { date: "Apr 25", calls: 50 },
  { date: "Apr 27", calls: 10 },
  { date: "Apr 29", calls: 20 },
  { date: "May 01", calls: 45 },
];

export function CallsChart() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                domain={[0, 140]}
                ticks={[0, 35, 70, 105, 140]}
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  border: "none",
                }}
              />
              <Line
                type="monotone"
                dataKey="calls"
                stroke="#000"
                strokeWidth={1.5}
                dot={{ r: 4, strokeWidth: 1 }}
                activeDot={{ r: 6, strokeWidth: 0, fill: "#000" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}