"use client";

import { FC, useEffect, useState } from "react";
import { Weather } from "@/types/weather";
import getWeather from "@/actions/getWeather";
import { WeatherDetails } from "@/components";

type Props = {
  latitude: number;
  longitude: number;
};

const WeatherDisplay: FC<Props> = ({ latitude, longitude }) => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const weather = await getWeather(latitude, longitude);
        setWeather(weather);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    getWeatherData();
  }, [latitude, longitude]);

  if (error) {
    return <p>Erreur : {error}</p>;
  }

  if (!weather) {
    return <p>Chargement des données météo...</p>;
  }

  return <WeatherDetails weather={weather} />;
};

export default WeatherDisplay;
