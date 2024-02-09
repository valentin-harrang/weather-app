import { Location } from "@/types/geolocation";

export const getUserLocation = (): Promise<Location> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(
        new Error(
          "La géolocalisation n'est pas prise en charge par ce navigateur."
        )
      );
    } else {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          resolve({
            latitude: latitude,
            longitude: longitude,
          });
        },
        () => {
          reject(
            new Error("Impossible d'obtenir la position de l'utilisateur.")
          );
        }
      );
    }
  });
};
