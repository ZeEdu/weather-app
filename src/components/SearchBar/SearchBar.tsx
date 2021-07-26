import React, { FC, useState } from "react";
import styles from "./SearchBar.module.css";
import { getCityForecast, getCityWeather } from "../../services/GetWeather";
import { CityWeatherData } from "../../interfaces/CityWeatherData";

type Props = {
  setCity: React.Dispatch<React.SetStateAction<CityWeatherData | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
};
/**
 * Retorna uma barra de busca
 * @component
 * @param setCity Função que é responsável salvar em um estado as informações da cidade buscada
 * @param setLoading Define os periodos de carregamento entre as informações de uma cidade serem buscadas e guadadas em um estado
 * @param setError Define em um estado uma mensagem de erro
 */
const SearchBar: FC<Props> = ({ setCity, setError, setLoading }) => {
  const [input, setInput] = useState("");
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setCity(null);
    setLoading(true);

    try {
      const cityWeatherResponse = await fetch(getCityWeather(input));
      const cityForecastResponse = await fetch(getCityForecast(input));
      const weather = await cityWeatherResponse.json();
      const forecast = await cityForecastResponse.json();
      if (weather.cod === "404" || forecast.cod === "404") {
        throw new Error("Cidade Não encontrada");
      }
      setCity({ weather, forecast });
    } catch (error) {
      if (error.message === "Cidade Não encontrada") {
        setError(error.message);
      } else {
        setError("Um erro ocorreu");
      }
      setCity(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${styles.box} container`}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInput}
          placeholder="Busque uma cidade"
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default SearchBar;
