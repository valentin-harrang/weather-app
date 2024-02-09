export enum Language {
  French = "fr",
  English = "en",
}

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
