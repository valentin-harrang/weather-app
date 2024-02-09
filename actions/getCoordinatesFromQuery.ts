"use server";

const apiBaseUrl = "https://api.openweathermap.org/geo/1.0/direct";
const apiKey = process.env.OPENWEATHER_API_KEY;

const getCoordinatesFromQuery = async (
  query: string
): Promise<{ lat: number; lon: number }> => {
  const url = `${apiBaseUrl}?q=${query}&limit=1&appid=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Impossible de récupérer les coordonnées.");
  }

  if (data.length === 0) {
    throw new Error("Aucun résultat trouvé");
  }

  return {
    lat: data[0].lat,
    lon: data[0].lon,
  };
};

export default getCoordinatesFromQuery;
