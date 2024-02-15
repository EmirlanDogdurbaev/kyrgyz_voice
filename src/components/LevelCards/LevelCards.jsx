import { Link } from "react-router-dom";
import styles from "./LevelCards.module.scss";
const LevelCards = () => {
  const img =
    "https://i.mycdn.me/videoPreview?id=5672496007738&type=39&idx=1&tkn=5hkJMZN4ygoc1KUUxKcWb_lORxM&fn=w_548";
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
        style={{ backgroundImage: `url(${img})`, backgroundPosition: 'bottom' }}
      >
        <h2>{item.level}</h2>
        <Link to={item.url}>Начать курс</Link>
      </article>
    );
  });
  return <>{card}</>;
};

export default LevelCards;
