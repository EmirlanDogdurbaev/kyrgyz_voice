import React from "react";
import cl from "./Theme.module.scss";
import { Link } from "react-router-dom";

function Theme(props) {
  return (
    <a href={props.theme} className={cl.box}>
      <p>{props.theme}</p>
      <Link to={"/"}>Изучить...</Link>
    </a>
  );
}

export default Theme;
