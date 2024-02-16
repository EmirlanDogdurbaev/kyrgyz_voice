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
          <NavItem to={"/"}>Главная</NavItem>
        </li>

        <li>
          <NavItem to={"/grammatic"}>Грамматика</NavItem>
        </li>

        <li>
          <NavItem to={"/books"}>Книги</NavItem>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
