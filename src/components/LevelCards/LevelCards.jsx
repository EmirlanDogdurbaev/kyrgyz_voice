import { Link } from "react-router-dom";
import styles from "./LevelCards.module.scss";
const LevelCards = () => {
  const img =
    "https://data.kaktus.media/image/big/2017-05-17_18-34-27_224103.jpg";
  const cardData = [
    {
      level: "Легкий",
      url: "/level1",
    },
    {
      level: "Средний",
      url: "/level2",
    },
    {
      level: "Продвинутый",
      url: "/level1",
    },
  ];

  const card = cardData.map((item) => {
    return (
      <article
        className={styles.LevelCards}
        style={{ backgroundImage: `url(${img})`, backgroundSize: '100% 100%' }}
      >
        <h2>{item.level}</h2>
        <Link to={item.url}>Начать курс</Link>
      </article>
    );
  });
  return <>{card}</>;
};

export default LevelCards;
