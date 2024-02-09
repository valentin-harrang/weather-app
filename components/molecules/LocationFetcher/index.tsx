"use client";

import { useState, useEffect } from "react";

import { WeatherDisplay } from "@/components";
import { Location } from "@/types/geolocation";
import { getUserLocation } from "@/utils/geolocation";

const LocationFetcher = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const loc = await getUserLocation();
        setLocation(loc);
        setError(null);
      } catch (error) {
        setError((error as Error).message);
        setLocation(null);
      }
    };

    fetchLocation();
  }, []);

  return (
    <div>
      {error && <p>Erreur : {error}</p>}
      {!error && !location && <p>Chargement de votre position...</p>}
      {location && (
        <WeatherDisplay
          latitude={location.latitude}
          longitude={location.longitude}
        />
      )}
    </div>
  );
};

export default LocationFetcher;
