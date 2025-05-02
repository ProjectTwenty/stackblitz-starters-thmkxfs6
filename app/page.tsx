import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { CallSummary } from '@/components/dashboard/CallSummary';
import { CallsChart } from '@/components/dashboard/CallsChart';
import { SuccessRateChart } from '@/components/dashboard/SuccessRateChart';
import { FilterBar } from '@/components/dashboard/FilterBar';

export default function Dashboard() {
  return (
    <div className="container mx-auto p-6">
      <DashboardHeader />
      <FilterBar />
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <CallSummary 
          title="Number of calls" 
          value="603" 
          icon="refresh" 
        />
        <CallSummary 
          title="Average duration" 
          value="0:46" 
        />
        <CallSummary 
          title="Total cost" 
          value="197,905" 
          suffix="credits" 
        />
        <CallSummary 
          title="Average cost" 
          value="328" 
          suffix="credits/call" 
        />
      </div>
      <div className="mt-6">
        <CallsChart />
      </div>
      <div className="mt-6">
        <SuccessRateChart />
      </div>
    </div>
  );
}