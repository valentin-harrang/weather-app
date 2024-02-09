"use client";

import { FC, useEffect, useState } from "react";
import { Weather } from "@/types/weather";
import getWeather from "@/actions/getWeather";

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

  return (
    <div>
      <h1>{weather.name}</h1>
      <p>Température : {weather.temp}°C</p>
      <p>Ressenti : {weather.feels_like}°C</p>
      <p>Humidité : {weather.humidity}%</p>
      <p>Pression : {weather.pressure} hPa</p>
      <p>Vitesse du vent : {weather.wind_speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
