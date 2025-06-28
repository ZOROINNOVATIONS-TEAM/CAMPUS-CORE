// src/components/CampusMap/MapView.jsx
import React from "react";

const MapView = () => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
      <div className="w-full h-80">
        {/* Replace with actual Google Maps API later */}
        <iframe
          title="campus-map"
          src="https://maps.google.com/maps?q=chandigarh%20university&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default MapView;
