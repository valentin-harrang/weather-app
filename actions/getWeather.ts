"use server";

import { Language, Unit, Weather } from "@/types/weather";

const apiDataBaseUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = process.env.OPENWEATHER_API_KEY;

const getWeather = async (
  latitude: number,
  longitude: number,
  units = Unit.Metric,
  language = Language.French
): Promise<Weather> => {
  const url = `${apiDataBaseUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}&lang=${language}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Impossible de récupérer les données météorologiques."
    );
  }

  return {
    id: data.weather[0].id,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    feels_like: data.main.feels_like,
    name: data.name,
    temp: data.main.temp,
    temp_min: data.main.temp_min,
    temp_max: data.main.temp_max,
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    wind_speed: data.wind.speed,
    wind_deg: data.wind.deg,
    clouds: data.clouds.all,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    visibility: data.visibility,
  };
};

export default getWeather;
