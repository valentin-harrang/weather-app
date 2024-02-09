import { Weather } from "@/types/weather";

export const convertDegreesToDirection = (degrees: number): string => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index =
    Math.round(((degrees %= 360) < 0 ? degrees + 360 : degrees) / 45) % 8;

  return directions[index];
};

export const findHottestDestination = (
  destinations: Weather[]
): Weather | null => {
  if (!destinations.length) return null;

  return destinations.reduce((prev, current) =>
    prev.temp > current.temp ? prev : current
  );
};

export const findColdestDestination = (
  destinations: Weather[]
): Weather | null => {
  if (!destinations.length) return null;

  return destinations.reduce((prev, current) =>
    prev.temp < current.temp ? prev : current
  );
};

export const isFavorite = (
  weatherId: number,
  weatherName: string,
  favorites: Weather[]
) => {
  return favorites?.some(
    (fav) => fav.id === weatherId && fav.name === weatherName
  );
};

export const uniqueCities = (cities: { name: string; country: string }[]) => {
  const unique = new Map();

  for (const city of cities) {
    unique.set(city.name + ", " + city.country, city);
  }

  return Array.from(unique.values());
};
