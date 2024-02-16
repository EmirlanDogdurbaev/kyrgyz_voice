import { api } from "../../store/api";
import { useEffect, useState } from "react";
import { header } from "../../store/header";
import axios from "axios";

import classes from "./Easy.module.scss";
const Easy = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${api}/courses/1/lessons`, header)
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
      <div className={classes.Easy} key={item.id}>
        <section>
          <h2>{item.title}</h2>
          <div>
            <p>{item.description}</p>
            <h4>Мисалы:</h4>
            <img src={item.img} alt="тут пример" />
            <ul>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Commodi, aut!
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Commodi, aut!
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Commodi, aut!
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Тест:</h2>
        </section>
      </div>
    );
  });

  return <div>{cardLesson}</div>;
};

export default Easy;
