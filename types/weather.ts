export interface BaseLocalNames {
  [languageCode: string]: string;
}

export type CitiesResponse = City[];

export interface City {
  name: string;
  local_names?: LocalNames;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export interface ExtendedLocalNames {
  ascii?: string;
  feature_name?: string;
}

export enum Language {
  French = "fr",
  English = "en",
}

export type LocalNames = BaseLocalNames & ExtendedLocalNames;

export enum Unit {
  Standard = "standard",
  Metric = "metric",
  Imperial = "imperial",
}

export type Weather = {
  id: number;
  description: string;
  icon: string;
  feels_like: number;
  name: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  wind_speed: number;
  wind_deg: number;
  clouds: number;
  sunrise: number;
  sunset: number;
  visibility: number;
};
