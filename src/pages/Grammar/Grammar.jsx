import React from "react";
import cl from "./Grammar.module.scss";
import Theme from "../../components/LanguageTheme/Theme";

function Grammar() {
  return (
    <div className={cl.wrap}>
      <h1>Грамматика</h1>
      <div className={cl.level}>
        <hr className={cl.Lleft} />
        <p>A1</p>
        <hr className={cl.Lright} />
      </div>
      <div className={cl.maping}>
        <Theme theme="Кыргызский алфавит" />
        <Theme theme="Исключения кыргызского языка" />
        <Theme theme="Окончания ииуу" />
        <Theme theme="Глаголы в кыргызском языке" />
      </div>
      <div className={cl.level}>
        <hr className={cl.Lleft} />
        <p>A2</p>
        <hr className={cl.Lright} />
      </div>
      <div className={cl.maping}>
        <Theme theme="Кыргызский алфавит" />
        <Theme theme="Исключения кыргызского языка" />
        <Theme theme="Окончания ииуу" />
        <Theme theme="Глаголы в кыргызском языке" />
        <Theme theme="Кыргызский алфавит" />
        <Theme theme="Исключения кыргызского языка" />
        <Theme theme="Окончания ииуу" />
        <Theme theme="Глаголы в кыргызском языке" />
      </div>
    </div>
  );
}

export default Grammar;
