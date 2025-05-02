"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FilterBar() {
  return (
    <div className="mt-6 flex items-center justify-end space-x-2">
      <Button variant="outline" size="sm" className="text-sm">
        All agents
        <ChevronDown className="ml-2 h-4 w-4" />
      </Button>
      <Button variant="outline" size="sm" className="text-sm">
        Last month
        <ChevronDown className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}