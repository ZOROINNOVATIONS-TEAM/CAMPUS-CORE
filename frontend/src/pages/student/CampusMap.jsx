import React from "react";
import MapCategoryCards from "@/components/dashboard/student/map/MapCategoryCards";
import MapSearchPanel from "@/components/dashboard/student/map/MapSearchPanel";
import MapDisplay from "@/components/dashboard/student/map/MapDisplay";
import PopularLocations from "@/components/dashboard/student/map/PopularLocations";
import InfoCardsSection from "@/components/dashboard/student/map/InfoCardsSection";

export default function CampusMap() {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Campus Map</h1>
          <p className="text-gray-500">Find your way around campus buildings and facilities</p>
        </div>
        <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600">
          Download Map
        </button>
      </div>
      <MapCategoryCards />
      <div className="flex gap-4 mt-6">
        <div className="flex-1">
          <MapSearchPanel />
          <div className="relative mt-4">
            <MapDisplay />
          </div>
        </div>
      </div>
      <PopularLocations />
      <InfoCardsSection />
    </div>
  );
}
