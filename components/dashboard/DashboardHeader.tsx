"use client";

import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-muted-foreground">My Workspace</p>
        <h1 className="text-3xl font-bold tracking-tight">Good afternoon, Betül</h1>
      </div>
      <div className="flex items-center">
        <div className="flex items-center rounded-full border border-border bg-background px-3 py-1.5">
          <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
          <span className="text-sm font-medium">Active calls: 0</span>
        </div>
        <Button variant="ghost" size="icon" className="ml-2">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}