import { Link } from "react-router-dom";
import styles from "./LevelCards.module.scss";
import { api } from "../../store/api";
import { useEffect, useState } from "react";
import { header } from "../../store/header";
import axios from "axios";
const LevelCards = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${api}/course/all`, header)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, []);

  const card = data.map((item) => {
    return (
      <article
        className={styles.LevelCards}
        key={item.id}
        style={{
          backgroundColor: "aliceblue",
          backgroundSize: "100% 100%",
          borderRadius: "4px",
        }}
      >
        <h2>{item.level}</h2>

        <Link to={`/${item.url}`}>Начать курс</Link>
      </article>
    );
  });
  return <>{card}</>;
};

export default LevelCards;
