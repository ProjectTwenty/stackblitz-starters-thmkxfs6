"use client";

import { useState } from "react";
import { Plus, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Sample data matching the mockup
const calls = [
  {
    id: 1,
    date: "Apr 30, 2025, 10:25 PM",
    agent: "TAV Airport Agent",
    duration: "0:22",
    messages: 6,
    status: "Successful",
  },
  {
    id: 2,
    date: "Apr 30, 2025, 4:59 PM",
    agent: "TAV Airport Agent",
    duration: "0:12",
    messages: 4,
    status: "Successful",
  },
  {
    id: 3,
    date: "Apr 30, 2025, 4:58 PM",
    agent: "TAV Airport Agent",
    duration: "0:43",
    messages: 10,
    status: "Successful",
  },
  {
    id: 4,
    date: "Apr 30, 2025, 4:46 PM",
    agent: "TAV Airport Agent",
    duration: "0:36",
    messages: 8,
    status: "Successful",
  },
  {
    id: 5,
    date: "Apr 30, 2025, 1:33 PM",
    agent: "Sales agent",
    duration: "0:32",
    messages: 8,
    status: "Successful",
  },
  {
    id: 6,
    date: "Apr 30, 2025, 1:22 PM",
    agent: "Sales agent",
    duration: "1:05",
    messages: 12,
    status: "Successful",
  },
  {
    id: 7,
    date: "Apr 30, 2025, 1:04 PM",
    agent: "TAV Airport Agent",
    duration: "0:07",
    messages: 1,
    status: "Successful",
  },
  {
    id: 8,
    date: "Apr 30, 2025, 1:01 PM",
    agent: "TAV Airport Agent",
    duration: "1:00",
    messages: 4,
    status: "Successful",
  },
  {
    id: 9,
    date: "Apr 30, 2025, 12:19 PM",
    agent: "TAV Airport Agent",
    duration: "0:53",
    messages: 4,
    status: "Successful",
  },
  {
    id: 10,
    date: "Apr 30, 2025, 12:10 PM",
    agent: "TAV Airport Agent",
    duration: "1:12",
    messages: 11,
    status: "Successful",
  },
];

export function CallHistoryTable() {
  return (
    <div>
      <div className="mb-4 flex gap-2">
        <Button variant="outline" size="sm">
          <Plus className="mr-1 h-4 w-4" />
          Date Before
        </Button>
        <Button variant="outline" size="sm">
          <Plus className="mr-1 h-4 w-4" />
          Evaluation
        </Button>
        <Button variant="outline" size="sm">
          <Plus className="mr-1 h-4 w-4" />
          Agent
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="cursor-pointer">
                <div className="flex items-center">
                  Date
                  <ChevronDown className="ml-1 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Agent</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Messages</TableHead>
              <TableHead>Evaluation result</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {calls.map((call) => (
              <TableRow key={call.id} className="cursor-pointer hover:bg-accent">
                <TableCell>{call.date}</TableCell>
                <TableCell>{call.agent}</TableCell>
                <TableCell>{call.duration}</TableCell>
                <TableCell>{call.messages}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-green-100 text-green-800">
                    {call.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}