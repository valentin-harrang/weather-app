import { Weather } from "@/types/weather";

export const convertDegreesToDirection = (degrees: number): string => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index =
    Math.round(((degrees %= 360) < 0 ? degrees + 360 : degrees) / 45) % 8;

  return directions[index];
};

export const isFavorite = (id: number, favorites: Weather[]): boolean => {
  return favorites.some((fav) => fav.id === id);
};
