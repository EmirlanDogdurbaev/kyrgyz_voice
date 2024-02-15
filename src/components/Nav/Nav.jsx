import Logo from "../Logo/Logo";
import styles from "./Nav.module.scss";
import NavItem from "./NavItem/NavItem";

const Nav = (props) => {
  // eslint-disable-next-line react/prop-types
  const isActive = props.stateClassName;

  const navClass = isActive ? `${styles.active}` : styles.Nav;

  return (
    <nav className={navClass}>
      <Logo />
      <ul>
        <li>
          <NavItem to={"/"}>
            {/* <img src={icon1} alt="" /> */}
            Главная
          </NavItem>
        </li>
        <li>
          <NavItem to={"/profile"}>
            {/* <img src={user} alt="" /> */}
            Профиль
          </NavItem>
        </li>
        <li>
          <NavItem to={"/grammatic"}>
            {/* <img src={catalog} alt="" /> */}
            Грамматика
          </NavItem>
        </li>
        <li>
          <NavItem to={"/audio"}>
            {/* <img src={catalog} alt="" /> */}
            Аудио Книги
          </NavItem>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
