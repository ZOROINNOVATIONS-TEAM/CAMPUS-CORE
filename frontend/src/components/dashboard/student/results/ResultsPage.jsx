import OverallPerformance from "./OverallPerformance";
import AssessmentSection from "./AssessmentSection";
import AssignmentResults from "./AssignmentResults";
import CgpaChart from "./CgpaChart";

export default function ResultsPage() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
   
      <div className="xl:col-span-2 flex flex-col gap-8">
        <OverallPerformance />
        <AssessmentSection
          type="ISA"
          title="Internal Summative Assessment (ISA)"
          actionLabel="Re-evaluate"
        />
        <AssessmentSection
          type="ESA"
          title="External Summative Assessment (ESA)"
          actionLabel="Request Review"
        />
      </div>
      {/* Charts & Stats */}
      <div className="flex flex-col gap-8">
        <AssignmentResults />
        <CgpaChart />
      </div>
    </div>
  );
}
