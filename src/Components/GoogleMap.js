// MapContainer.js
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const mapStyles = {
    height: "361px",
    width: "100%",
    borderRadius: "10px",
  };

  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const apiKey = "AIzaSyAl_lEscxbg63ZIWsHT9ViGMcuZT5hb9Sc";

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={10}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
