import { NavLink } from "react-router-dom";
import classes from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={classes.Nav}>
      <ul>
        <li>
          <NavLink to={"/profile"}>Профиль</NavLink>
        </li>
        <li>
          <NavLink to={"/gramatic"}>Грамматика</NavLink>
        </li>
        <li>
          <NavLink to={"/audio"}>Аудио Книги</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>главная</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
