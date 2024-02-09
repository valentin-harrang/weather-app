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

export const isFavorite = (id: number, favorites: Weather[]): boolean =>
  favorites.some((fav) => fav.id === id);
