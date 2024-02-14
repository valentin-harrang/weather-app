"use client";

import { FC } from "react";
import { useFavorites } from "@/context/FavoritesContext";

const FavoriteDestinationsList: FC = () => {
  const { favorites, removeFavorite, removeAllFavorites } = useFavorites();

  return (
    <div className="w-full bg-gray-100 p-4 rounded h-fit">
      <h2 className="flex text-3xl items-center mr-2 font-bold">
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
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
        Mes destinations favorites
      </h2>

      <div>
        {favorites.length === 0 && (
          <p className="mt-6">
            Vous n&apos;avez pas encore de destination favorite.
          </p>
        )}

        <ul className="mt-6 pl-4 flex flex-col gap-4">
          {favorites.map(({ name }) => (
            <li key={name} className="ml-4">
              <div className="flex items-center">
                <button
                  onClick={() => removeFavorite(name)}
                  className="ml-2 mr-4 bg-red-500 text-white px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent hover:bg-red-600 transition-colors"
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
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <span>{name}</span>
              </div>
            </li>
          ))}
        </ul>

        {favorites.length > 0 && (
          <div className="flex justify-end items-end">
            <button
              onClick={() => removeAllFavorites()}
              className="flex mt-6 bg-red-500 text-white px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent hover:bg-red-600 transition-colors"
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
              Tout supprimer
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoriteDestinationsList;
