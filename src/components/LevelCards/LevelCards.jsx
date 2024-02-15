import { Link } from "react-router-dom";
import styles from "./LevelCards.module.scss";
const LevelCards = () => {
  const cardData = ["Легкий", "Средний", "Продвинутый"];

  const card = cardData.map((item) => {
    return (
      <article className={styles.LevelCards}>
        <h2>{item}</h2>
        <Link to={"/level1"}>Начать курс</Link>
      </article>
    );
  });
  return <>{card}</>;
};

export default LevelCards;
