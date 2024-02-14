"use client";

import { FC, useState, useEffect } from "react";
import getCities from "@/actions/getCities";
import getCoordinatesFromQuery from "@/actions/getCoordinatesFromQuery";
import getWeather from "@/actions/getWeather";
import { WeatherDetails } from "@/components";
import { City, Weather } from "@/types/weather";

const SearchBar: FC = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<City[]>([]);
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadSuggestions = async () => {
      if (query.length > 2) {
        try {
          const cities = await getCities({ query });
          setSuggestions(cities);
        } catch (error) {
          console.error(
            "Erreur lors de la récupération des suggestions de villes",
            error
          );
        }
      } else {
        setSuggestions([]);
      }
    };

    loadSuggestions();
  }, [query]);

  const handleSearch = async () => {
    try {
      const { lat, lon } = await getCoordinatesFromQuery(query);
      const data = await getWeather(lat, lon);

      setWeather(data);
      setError("");
    } catch (err) {
      setError("Erreur lors de la récupération des données météo.");
      console.error(err);
    }
  };

  const handleSuggestionClick = (cityName: string) => {
    setQuery(cityName);
    setSuggestions([]);
    handleSearch();
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await handleSearch();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Saisissez une localisation"
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-300 rounded-md py-2 px-4 w-full"
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:bg-blue-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </form>

      {suggestions.length > 0 && (
        <ul className="absolute bg-white shadow-md mt-2 max-h-60 w-full overflow-auto z-10">
          {suggestions.map(({ name, country }: City) => (
            <li
              key={`${name}-${country}`}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSuggestionClick(name)}
            >
              {name}, {country}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4">
        {error && <p>{error}</p>}
        {weather && <WeatherDetails weather={weather} isVertical />}
      </div>
    </>
  );
};

export default SearchBar;
