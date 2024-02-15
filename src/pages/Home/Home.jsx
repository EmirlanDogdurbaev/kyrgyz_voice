import classes from "./Home.module.scss";
import { useRef } from "react";
import LevelCards from "../../components/LevelCards/LevelCards";

const Home = () => {
  const targetElementRef = useRef(null);
  const scrollToTargetElement = () => {
    if (targetElementRef.current) {
      targetElementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={classes.Home}>
      <section className={classes.Header}>
        <h1>Добро Пожаловать</h1>
        <p>
          Готовы погрузиться в захватывающий мир кыргызской культуры и языка? Мы
          рады приветствовать вас здесь и предложить вам уникальную возможность
          познакомиться с богатым историческим наследием этого удивительного
          языка.
        </p>
        <button onClick={scrollToTargetElement}>Начать Обучение</button>
      </section>

      <section className={classes.title}>
        <h2>Выберите уровень который хотите выучить</h2>
      </section>
      <section
        id="targetElement"
        ref={targetElementRef}
        className={classes.Cards_cont}
      >
        <LevelCards />
      </section>
    </div>
  );
};

export default Home;
