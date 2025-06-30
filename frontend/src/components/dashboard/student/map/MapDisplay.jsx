import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapLayersPanel from "./MapLayersPanel";

export default function MapDisplay() {
  const campusPosition = [28.6139, 77.2090];
  const buildings = [
    { name: "Main Building", position: [28.6139, 77.2090] },
    { name: "Library", position: [28.6145, 77.2095] },
    { name: "Dormitory", position: [28.6135, 77.2085] },
  ];

  return (
    <div className="flex gap-4 mt-4">
      {/* Map (left, fixed width) */}
      <div className="rounded-lg overflow-hidden shadow" style={{ width: "500px", height: "400px" }}>
        <MapContainer
          center={campusPosition}
          zoom={17}
          style={{ height: "100%", width: "100%" }}
          attributionControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {buildings.map((building, index) => (
            <Marker key={index} position={building.position}>
              <Popup>{building.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Layers Panel (right, flexible width) */}
      <div className="flex-1 bg-white rounded-lg shadow p-4 overflow-y-auto" style={{ height: "400px" }}>
        <MapLayersPanel />
      </div>
    </div>
  );
}




