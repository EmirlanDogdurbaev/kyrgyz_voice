import React, { useEffect, useState } from 'react'
import cl from './Books.module.scss'
import Book from '../../components/Book/Book'
import axios from 'axios';
import { api } from '../../store/api';
import { header } from '../../store/header';

function Books() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${api}/content/books/all`, header)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, []);

  console.log(data)

  const cardLesson = data.map((item) => {
    return (
      <Book img={item.image_url} name={item.title} key={item.id} text={item.content} id={item.id}/>    
    );
  });
  return (
    <div className={cl.wrap}> 
    {cardLesson}
    </div>
  )
}

export default Books