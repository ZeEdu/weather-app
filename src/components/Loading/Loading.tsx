import styles from "./Loading.module.css";
/**
 * Um Loading Spinner
 * @component
 */
const Loading = () => {
  return (
    <div className="container animeLeft">
      <div className={styles.ldsDualRing}></div>
    </div>
  );
};

export default Loading;
