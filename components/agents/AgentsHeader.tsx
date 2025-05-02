"use client";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export function AgentsHeader() {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Agents</h1>
        <p className="text-muted-foreground">Create and manage your AI agents</p>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="outline">Playground</Button>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New agent
        </Button>
      </div>
    </div>
  );
}