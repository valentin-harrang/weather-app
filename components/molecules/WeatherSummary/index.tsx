"use client";

import { useEffect, useState } from "react";
import {
  findHottestDestination,
  findColdestDestination,
} from "@/utils/weather";
import { useFavorites } from "@/context/FavoritesContext";
import { Weather } from "@/types/weather";

const WeatherSummary = () => {
  const { favorites } = useFavorites();
  const [hottest, setHottest] = useState<Weather | null>(null);
  const [coldest, setColdest] = useState<Weather | null>(null);

  useEffect(() => {
    setHottest(findHottestDestination(favorites));
    setColdest(findColdestDestination(favorites));
  }, [favorites]);

  return (
    <>
      {favorites.length > 1 && (
        <div className="flex flex-col md:flex-row justify-between">
          {hottest && (
            <p>
              🏖 Destination la plus chaude : {hottest.name} (
              {hottest.temp.toFixed(1)}°C)
            </p>
          )}
          {coldest && (
            <p>
              ⛄ Destination la plus froide : {coldest.name} (
              {coldest.temp.toFixed(1)}°C)
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default WeatherSummary;
