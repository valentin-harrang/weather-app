"use server";

import { City, Language } from "@/types/weather";
import { uniqueCities } from "@/utils/weather";

const apiBaseUrl = "https://api.openweathermap.org/geo/1.0/direct";
const apiKey = process.env.OPENWEATHER_API_KEY;

interface FetchCitiesProps {
  query: string;
  language?: Language;
  limit?: number;
}

const getCities = async ({
  query,
  language = Language.French,
  limit = 5,
}: FetchCitiesProps): Promise<City[]> => {
  const apiUrl = `${apiBaseUrl}?q=${query}&limit=${limit}&appid=${apiKey}&lang=${language}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch cities");
    }
    const cities = await response.json();

    return uniqueCities(cities);
  } catch (error) {
    console.error("Erreur lors de la récupération des villes :", error);
    throw new Error("Erreur lors de la récupération des villes");
  }
};

export default getCities;
