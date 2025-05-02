"use client";

import { RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CallSummaryProps {
  title: string;
  value: string;
  suffix?: string;
  icon?: "refresh";
}

export function CallSummary({ title, value, suffix, icon }: CallSummaryProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          {icon === "refresh" && (
            <Button variant="ghost" size="icon" className="-mr-2 h-8 w-8">
              <RefreshCw className="h-4 w-4" />
            </Button>
          )}
        </div>
        <div className="mt-2 flex items-end">
          <span className="text-3xl font-bold">{value}</span>
          {suffix && (
            <span className="ml-1 text-sm text-muted-foreground">{suffix}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}