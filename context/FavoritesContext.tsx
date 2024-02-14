"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  FC,
  ReactNode,
} from "react";
import { Weather } from "@/types/weather";
import { toast } from "sonner";

interface FavoritesContextType {
  favorites: Weather[];
  addFavorite: (weather: Weather) => void;
  removeFavorite: (name: string) => void;
  removeAllFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Weather[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const addFavorite = (weather: Weather) => {
    if (favorites.some((fav) => fav.name === weather.name)) {
      return;
    }

    const updatedFavorites = [...favorites, weather];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    toast.success("Cette destination a été ajoutée à vos favoris.");
  };

  const removeFavorite = (name: string) => {
    const updatedFavorites = favorites.filter((fav) => fav.name !== name);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    toast.success("Cette destination a été retirée de vos favoris.");
  };

  const removeAllFavorites = () => {
    setFavorites([]);
    localStorage.removeItem("favorites");

    toast.success("Toutes les destinations ont été retirées de vos favoris.");
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, removeAllFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
