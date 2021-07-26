import { FC } from "react";
import styles from "./CityNotFound.module.css";

type Props = {
  error: string;
};

/**
 * Component com uma mensagem de erro estilizada.
 * @component
 * @param error {string} Mensagem de Erro
 *  */
const CityNotFound: FC<Props> = ({ error }) => {
  return (
    <div className={`container animeLeft`}>
      <p className={styles.errorMessage}>{error}</p>
    </div>
  );
};

export default CityNotFound;
