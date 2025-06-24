import { Card, CardHeader, CardContent } from "../../ui/card";
import { Building2 } from "lucide-react";

const departments = [
  { name: "Computer Science", count: 415 },
  { name: "Mechanical Engg", count: 382 },
  { name: "Business Admin", count: 317 },
  { name: "Pharmacy", count: 194 },
  { name: "Design", count: 120 },
];

export default function ActiveDepartmentsStats() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <h3 className="text-md font-semibold text-gray-800 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-blue-600" />
          Active Departments
        </h3>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {departments.map((d, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">{d.name}</span>
              <span className="text-base font-bold text-gray-900">{d.count}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
