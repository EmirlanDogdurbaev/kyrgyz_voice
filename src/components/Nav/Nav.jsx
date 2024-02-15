
import styles from "./Nav.module.scss";
import NavItem from "./NavItem/NavItem";


const Nav = (props) => {
  // eslint-disable-next-line react/prop-types
  const isActive = props.stateClassName;

  const navClass = isActive ? `${styles.active}` : styles.Nav;

  return (
    <nav className={navClass}>
      {/* <Logo /> */}
      <ul>
        <li>
          <NavItem to={"/"}>
            {" "}
            {/* <img src={icon1} alt="" /> */}
            Главная
          </NavItem>
        </li>
        <li>
          <NavItem to={"/profile"}>
            {" "}
            {/* <img src={user} alt="" /> */}
             Профиль
          </NavItem>
        </li>
        <li>
          <NavItem to={"/catalog"}>
          {/* <img src={catalog} alt="" /> */}
            Каталог
          </NavItem>
        </li>
        {JSON.parse(localStorage.getItem("user")).role !== "Librarian" ? (
          <li>
            <NavItem to={"/basket"}>
              {/* {" "} */}
              {/* <img src={icon1} alt="" /> */}
              
              Корзина
            </NavItem>
          </li>
        ) : (
          <>
            <li>
              <NavItem to={"/basket"}>
                {" "}
                {/* <img src={icon1} alt="" /> */}
                Заказы
              </NavItem>
            </li>
            <li>
              <NavItem to={"/new-book"}>
                {" "}
                {/* <img src={icon1} alt="" /> */}
                Новая книга
              </NavItem>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;