import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import { CityWeatherData } from "../../interfaces/CityWeatherData";
import styles from "./City.module.css";
import { getWeekday } from "../../services/getWeekday";

type Props = {
  city: CityWeatherData;
  setCity: React.Dispatch<React.SetStateAction<CityWeatherData | null>>;
};
/**
 * Um card responsivo com as informações da cidade
 * @component
 * @param city {CityWeatherData} Dados sobre a cidade
 * @param setCity {React.Dispatch<React.SetStateAction<CityWeatherData | null>>} Função para alterar o estado da cidade
 */
const City: FC<Props> = ({ setCity, city: { weather, forecast } }) => {
  const handleClose = () => {
    setCity(null);
  };
  return (
    <div className={`${styles.wrapper} container animeLeft`}>
      <div className={styles.box}>
        <div className={`${styles.row} ${styles.today} ${styles.topRow}`}>
          <p className={`${styles.text} ${styles.bold}`}>
            {weather.name} - {weather.sys.country}
          </p>
          <FontAwesomeIcon
            onClick={handleClose}
            className={`${styles.icon} ${styles.closeButton}`}
            icon={faTimes}
          />
        </div>
        <div className={`${styles.row} ${styles.today}`}>
          <p className={`${styles.text} ${styles.heading}`}>
            {Math.round(weather.main.temp)}°C {weather.weather[0].main}
          </p>
        </div>
        <div className={`${styles.row} ${styles.today}`}>
          <div className={`${styles.inline} ${styles.itemMarginRight}`}>
            <p
              className={`${styles.text} ${styles.bold} ${styles.minMaxMargin}`}
            >
              <FontAwesomeIcon className={styles.icon} icon={faArrowDown} />
              {Math.round(weather.main.temp_min)}
            </p>
            <p className={`${styles.text} ${styles.bold}`}>
              <FontAwesomeIcon className={styles.icon} icon={faArrowUp} />
              {Math.round(weather.main.temp_max)}
            </p>
          </div>
          <p className={styles.text}>
            Sensação{" "}
            <span className={styles.bold}>
              {Math.round(weather.main.feels_like)}°C
            </span>
          </p>
        </div>
        <div className={`${styles.row} ${styles.today}`}>
          <p className={`${styles.text} ${styles.itemMarginRight}`}>
            Vento <span className={styles.bold}>{weather.wind.speed} Km/h</span>
          </p>
          <p className={styles.text}>
            Humidade{" "}
            <span className={styles.bold}>{weather.main.humidity}%</span>
          </p>
        </div>
        <div className={styles.separator}></div>
        <div className={`${styles.row} ${styles.forecast}`}>
          <div>
            <div>
              <p className={`${styles.weekday}`}>{getWeekday(1)}</p>
            </div>
            <div>
              <p className={`${styles.text} ${styles.forecastMinMax}`}>
                {Math.round(forecast.list[0].main.temp_min)}°
              </p>
              <p className={`${styles.text} ${styles.forecastMinMax}`}>
                {Math.round(forecast.list[0].main.temp_max)}°
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className={`${styles.weekday}`}>{getWeekday(2)}</p>
            </div>
            <div>
              <p className={`${styles.text} ${styles.forecastMinMax}`}>
                {Math.round(forecast.list[8].main.temp_min)}°
              </p>
              <p className={`${styles.text} ${styles.forecastMinMax}`}>
                {Math.round(forecast.list[8].main.temp_max)}°
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className={`${styles.weekday}`}>{getWeekday(3)}</p>
            </div>
            <div>
              <p className={`${styles.text} ${styles.forecastMinMax}`}>
                {Math.round(forecast.list[16].main.temp_min)}°
              </p>
              <p className={`${styles.text} ${styles.forecastMinMax}`}>
                {Math.round(forecast.list[16].main.temp_max)}°
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className={`${styles.weekday}`}>{getWeekday(4)}</p>
            </div>
            <div>
              <p className={`${styles.text} ${styles.forecastMinMax} `}>
                {Math.round(forecast.list[24].main.temp_min)}°
              </p>
              <p className={`${styles.text} ${styles.forecastMinMax}`}>
                {Math.round(forecast.list[24].main.temp_max)}°
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className={`${styles.weekday}`}>{getWeekday(5)}</p>
            </div>
            <div>
              <p className={`${styles.text} ${styles.forecastMinMax} `}>
                {Math.round(forecast.list[32].main.temp_min)}°
              </p>
              <p className={`${styles.text} ${styles.forecastMinMax}`}>
                {Math.round(forecast.list[32].main.temp_max)}°
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default City;
