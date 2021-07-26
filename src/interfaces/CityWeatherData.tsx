import { CurrentWeatherResponse } from "./CurrentWeatherResponse";
import { ForecastResponse } from "./ForecastResponse";

export interface CityWeatherData {
  weather: CurrentWeatherResponse;
  forecast: ForecastResponse;
}
