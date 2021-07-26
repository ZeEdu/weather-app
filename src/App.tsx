import { useState } from "react";
import styles from "./App.module.css";
import City from "./components/City/City";
import CityNotFound from "./components/CityNotFound/CityNotFound";
import Loading from "./components/Loading/Loading";
import SearchBar from "./components/SearchBar/SearchBar";
import { CityWeatherData } from "./interfaces/CityWeatherData";

function App() {
  const [city, setCity] = useState<null | CityWeatherData>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  return (
    <article className={styles.App}>
      <div className="container">
        <h1 className={styles.title}>Previsão do tempo</h1>
      </div>

      <SearchBar
        setCity={setCity}
        setLoading={setLoading}
        setError={setError}
      />
      {loading && <Loading />}
      {city && !loading && <City city={city} setCity={setCity} />}
      {error && !loading && <CityNotFound error={error} />}
    </article>
  );
}

export default App;
