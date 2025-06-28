// src/pages/CampusMapPage.jsx
import React from "react";
import MapFilterPanel from "../components/CampusMap/MapFilterPanel";
import MapView from "../components/CampusMap/MapView";
import PopularLocations from "../components/CampusMap/PopularLocations";
import SidebarWidgets from "../components/CampusMap/SidebarWidgets";
import Topbar from "../components/dashboard/Topbar";
import Menu from "../components/dashboard/Menu";
import WelcomeCard from "../components/dashboard/WelcomeCard";

const CampusMapPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <Topbar />
      <WelcomeCard />
      <Menu />
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Campus Map</h1>
        <p className="text-gray-600">
          Find your way around campus buildings and facilities
        </p>
      </div>

      <MapFilterPanel />
      <MapView />

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PopularLocations />
        </div>
        <SidebarWidgets />
      </div>
    </div>
  );
};

export default CampusMapPage;
