import { AgentConfigForm } from "@/components/agent-config/AgentConfigForm";

export default function AgentConfigPage() {
  return (
    <div className="container mx-auto max-w-4xl p-6">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">Agent Configuration</h1>
      <AgentConfigForm />
    </div>
  );
}