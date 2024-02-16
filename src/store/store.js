import axios from "axios";
import { makeAutoObservable } from "mobx";
import { api } from "./api";

export default class Store {
  constructor() {
    makeAutoObservable(this);
  }
  checkAuth() {
    return localStorage.getItem("token");
  }
  async login(email, password) {
    try {
      const response = await axios.post(`${api}/users/login`, {
        email,
        password,
      });
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("user");
    } catch (e) {
      console.error(e);
    }
  }
  async register(email, password, username) {
    try {
      const response = await axios.post(`${api}/users/register`, {
        email,
        password,
        username,
      });
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          email,
          username,
        })
      );
    } catch (e) {
      console.error(e.message);
    }
  }
}
