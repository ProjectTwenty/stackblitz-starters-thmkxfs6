import { AgentsHeader } from "@/components/agents/AgentsHeader";
import { AgentList } from "@/components/agents/AgentList";

export default function AgentsPage() {
  return (
    <div className="container mx-auto p-6">
      <AgentsHeader />
      <AgentList />
    </div>
  );
}