import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./Auth.module.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [userName, setUserName] = useState("");

  const { store } = useContext(Context);

  function register() {
    store
      .register(email, password, userName)
      .then(() => window.location.reload());
  }

  return (
    <div className={styles.Auth}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={(e) => setPasssword(e.target.value)}
        value={password}
      />

      <label htmlFor="userName">User Name</label>
      <input
        type="text"
        id="userName"
        name="userName"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />

      <button className={styles.Button} onClick={register}>
        Ресистрация
      </button>
      <Link to={"/login"}>Уже есть аккаунт</Link>
    </div>
  );
}
export default observer(Register);
