import { Link } from "react-router-dom";
import classes from "./Home.module.scss";
import { useRef } from "react";

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
        <h1>home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius at,
          tempora nisi porro itaque ut alias. Illo at impedit possimus placeat
          velit, eos tempore? Hic eum omnis autem dolores.
        </p>
        <button onClick={scrollToTargetElement}>Начать Обучение</button>
      </section>

      <section id="targetElement" ref={targetElementRef}>
        <article>
          <h3>asdas</h3>
        </article>
        <article>
          <h3>asdas</h3>
        </article>
        <article>
          <h3>asdas</h3>
        </article>
      </section>
    </div>
  );
};

export default Home;
