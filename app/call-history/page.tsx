import { CallHistoryHeader } from "@/components/call-history/CallHistoryHeader";
import { CallHistoryTable } from "@/components/call-history/CallHistoryTable";

export default function CallHistoryPage() {
  return (
    <div className="container mx-auto p-6">
      <CallHistoryHeader />
      <CallHistoryTable />
    </div>
  );
}