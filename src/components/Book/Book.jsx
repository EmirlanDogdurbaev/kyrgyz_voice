import React from "react";
import cl from "./Book.module.scss";
import { Link } from "react-router-dom";

function Book({ name, img, id }) {
  console.log(img);
  return (
    // to={`${props.name}`}
    <Link to={`/books/${id}`} className={cl.book}>
      <img
        // src="https://nlkg.kg/data/9-1495069373/d0915c1037956501ebb743cfd31f9fa6.jpg"
        src={img}
        alt="photo"
        className={cl.img}
      />
      <h1 className={cl.name}>{name}</h1>
    </Link>
  );
}

export default Book;
