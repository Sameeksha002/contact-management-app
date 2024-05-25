import React, { useState } from "react";
import { useQuery } from "react-query";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import { fetchCountryData } from "../api/covidApi";
import "leaflet/dist/leaflet.css";

const defaultIcon = L.icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

interface CountryInfo {
  _id: string;
  lat: number;
  long: number;
}

interface CountryData {
  country: string;
  active: number;
  recovered: number;
  deaths: number;
  countryInfo: CountryInfo;
}

const Map: React.FC = () => {
  const { data, error, isLoading } = useQuery<CountryData[]>(
    "countryData",
    fetchCountryData
  );

  const [selectedMarker, setSelectedMarker] = useState<CountryData | null>(
    null
  );

  const handleMarkerOrMapClick = (country: CountryData | null) => {
    setSelectedMarker(country);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const defaultCenter: [number, number] = [51.505, -0.09];
  const defaultZoom = 2;

  return (
    <div className="h-96 w-full">
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapClickHandler setSelectedMarker={handleMarkerOrMapClick} />
        {data &&
          data.map((country) => (
            <Marker
              key={country.countryInfo._id}
              position={[country.countryInfo.lat, country.countryInfo.long]}
              icon={defaultIcon}
              eventHandlers={{
                click: () => handleMarkerOrMapClick(country),
              }}
            >
              {selectedMarker === country && (
                <Popup>
                  <div>
                    <h2>{country.country}</h2>
                    <p>Active: {country.active}</p>
                    <p>Recovered: {country.recovered}</p>
                    <p>Deaths: {country.deaths}</p>
                  </div>
                </Popup>
              )}
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

const MapClickHandler: React.FC<{
  setSelectedMarker: (marker: CountryData | null) => void;
}> = ({ setSelectedMarker }) => {
  useMapEvents({
    click: () => {
      setSelectedMarker(null);
    },
  });

  return null;
};

export default Map;
