export interface ForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface List {
  dt: number;
  main: MainClass;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: Date;
}

export interface Clouds {
  all: number;
}

export interface MainClass {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Sys {
  pod: Pod;
}

export enum Pod {
  D = "d",
  N = "n",
}

export interface Weather {
  id: number;
  main: MainEnum;
  description: Description;
  icon: Icon;
}

export enum Description {
  CéuLimpo = "céu limpo",
  Nublado = "nublado",
  NuvensDispersas = "nuvens dispersas",
}

export enum Icon {
  The01D = "01d",
  The01N = "01n",
  The03D = "03d",
  The04D = "04d",
  The04N = "04n",
}

export enum MainEnum {
  Clear = "Clear",
  Clouds = "Clouds",
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}
