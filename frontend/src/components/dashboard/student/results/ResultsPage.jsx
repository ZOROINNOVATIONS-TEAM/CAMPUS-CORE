import OverallPerformance from "./OverallPerformance";
import AssessmentSection from "./AssessmentSection";
import AssignmentResults from "./AssignmentResults";
import CgpaChart from "./CgpaChart";

export default function ResultsPage() {
  return (
    <div className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-6 bg-gray-50 dark:bg-gray-900">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Left 2/3 – Performance + Assessments */}
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

        {/* Right 1/3 – Charts */}
        <div className="flex flex-col gap-8">
          <AssignmentResults />
          <CgpaChart />
        </div>
      </div>
    </div>
  );
}
