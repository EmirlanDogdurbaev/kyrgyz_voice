import styles from "./Layout.module.scss";
import { useState } from "react";
import Nav from "../Nav/Nav"

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [navbar, setNavbar] = useState(false);
  const toggle = () => {
    setNavbar(!navbar);
  };

  return (
    <div className={styles.main}>
      <Nav stateClassName={navbar} />
      <div className={styles.rightContainer}>
        <section>{children}</section>
      </div>
    </div>
  );
};

export default Layout;