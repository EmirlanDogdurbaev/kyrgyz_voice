import React from "react";
import cl from "./Grammar.module.scss";
import Theme from "../../components/LanguageTheme/Theme";
import { Link } from "react-router-dom";

function Grammar() {
  const themesA1 = [
    {
      theme: "Кыргызский алфавит",
      id: 1,
    },
    {
      theme: "Составные слова",
      id: 2,
    },
    {
      theme: "Окончания ииуу",
      id: 3,
    },
    {
      theme: "Глаголы в кыргызском языке",
      id: 4,
    },
  ];

  const themeA1 = themesA1.map((item) => {
    return (
      <div className={cl.box} key={item.id}>
        <p>{item.theme}</p>
        <Link to={`/grammatic/${item.id}`} className={cl.btn}>Изучить...</Link>
      </div>
    );
  });
  return (
    <div className={cl.wrap}>
      <h1>Грамматика</h1>
      <div className={cl.level}>
        <hr className={cl.Lleft} />
        <p>A1</p>
        <hr className={cl.Lright} />
      </div>
      <div className={cl.maping}>{themeA1}</div>
      <div className={cl.level}>
        <hr className={cl.Lleft} />
        <p>A2</p>
        <hr className={cl.Lright} />
      </div>
      <div className={cl.maping}>
        {themeA1}
      </div>
      <div className={cl.level}>
        <hr className={cl.Lleft} />
        <p>B1</p>
        <hr className={cl.Lright} />
      </div>
      <div className={cl.maping}>
        {themeA1}
      </div>
    </div>
  );
}

export default Grammar;
