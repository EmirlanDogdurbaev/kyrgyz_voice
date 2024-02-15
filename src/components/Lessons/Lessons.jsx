import { useParams } from "react-router-dom";
import classes from "./Lessons.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Lessons = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, [id]);

  return (
    <div className={classes.Lessons}>
      <section>
        <h2>{data.title}</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            numquam, expedita officia facilis tenetur laboriosam? Repudiandae
            quia error nobis numquam enim? Cum doloribus assumenda, quam
            eligendi quibusdam veniam delectus earum.
          </p>
          <h4>Мисалы:</h4>
          <ul>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
              aut!
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
              aut!
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
              aut!
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Тест:</h2>
      </section>
    </div>
  );
};

export default Lessons;
