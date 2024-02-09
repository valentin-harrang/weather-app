import { FC } from "react";
import Image from "next/image";
import { Weather } from "@/types/weather";
import { convertDegreesToDirection } from "@/utils/weather";
import { AddToFavoritesButton } from "@/components";

type WeatherDetailsProps = {
  weather: Weather;
  showAddToFavorites?: boolean;
};

const WeatherDetails: FC<WeatherDetailsProps> = ({
  weather,
  showAddToFavorites = true,
}) => (
  <div className="bg-gray-100 p-4 rounded">
    <h2 className="flex text-3xl items-center font-bold">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 mr-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>
      <span className="mr-2">{weather.name}</span>
      {showAddToFavorites && <AddToFavoritesButton weather={weather} />}
    </h2>

    <div className="flex-col md:flex-row md:gap-0 gap-6 md:items-center">
      <div>
        <div className="flex items-center">
          {weather.icon && (
            <Image
              src={`https://openweathermap.org/img/w/${weather.icon}.png`}
              alt="Weather icon"
              width={50}
              height={50}
            />
          )}
          <p className="capitalize text-sm">{weather.description}</p>
        </div>
        <p className="text-2xl">{weather.temp.toFixed(1)}°C</p>
        <p className="text-sm text-gray-700">
          Ressenti {weather.feels_like.toFixed(1)}°C
        </p>
      </div>

      <ul>
        <li>
          <strong>Min</strong> : {weather.temp_min.toFixed(1)}°C, Max :{" "}
          {weather.temp_max.toFixed(1)}
          °C
        </li>
        <li>
          <strong>Pression</strong> : {weather.pressure} hPa
        </li>
        <p>
          <strong>Humidité</strong> : {weather.humidity}%
        </p>
        <li>
          <strong>Vent</strong> : {weather.wind_speed.toFixed(1)} m/s{" "}
          {convertDegreesToDirection(weather.wind_deg)}
        </li>
      </ul>

      <ul>
        <li>
          <strong>Visibilité</strong> : {(weather.visibility / 1000).toFixed(1)}{" "}
          km
        </li>
        <li>
          <strong>Nuages</strong> : {weather.clouds}%
        </li>
        <li>
          <strong>Lever du soleil</strong> :{" "}
          {new Date(weather.sunrise * 1000).toLocaleTimeString().slice(0, 5)}
        </li>
        <li>
          <strong>Coucher du soleil</strong> :{" "}
          {new Date(weather.sunset * 1000).toLocaleTimeString().slice(0, 5)}
        </li>
      </ul>
    </div>
  </div>
);

export default WeatherDetails;
