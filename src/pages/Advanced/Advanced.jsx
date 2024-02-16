import { api } from "../../store/api";
import { useEffect, useState } from "react";
import { header } from "../../store/header";
import axios from "axios";

import classes from "./Advanced.module.scss";
import { Link } from "react-router-dom";
const Advanced = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${api}/courses/3/lessons`, header)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, []);

  console.log(data);

  const cardLesson = data.map((item) => {
    return (
      <article className={classes.Advanced} key={item.id}>
        <h3>{item.title}</h3>
        <Link to={`/advanced/${item.id}`}>изучить</Link>
      </article>
    );
  });

  return <div className={classes.Cont}>{cardLesson}</div>;
};

export default Advanced;
