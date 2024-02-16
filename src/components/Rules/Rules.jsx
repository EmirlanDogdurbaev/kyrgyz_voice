import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // Убедитесь, что у вас установлен axios
import { api } from "../../store/api";
import { header } from "../../store/header";

const Rules = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${api}/lessons/${id}`, header) 
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, [id]);

  console.log(data);

  return (
    <div>
      <section>
        <h2>hello</h2>
      </section>
    </div>
  );
};

export default Rules;
