import "./App.css";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Grammar from "./pages/Grammar/Grammar";
import Books from "./pages/Books/Books";
import Text from "./pages/Books/Text";
import AudioBooks from "./pages/Audio/Audio";
import Lessons from "./components/Lessons/Lessons";
import AuthForm from "./components/AuthForm/AuthForm.jsx";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import Redirect from "./pages/Redirect/Redirect";

function App() {
  return (
    <>
      {localStorage.getItem("token") ? (
        <Layout>
          <Routes>
            <Route path="*" element={<Redirect where={"/"} />} />
            <Route path="/" index element={<Home />} />
            <Route path="/grammatic" element={<Grammar />} />
            <Route path="/grammatic/:id" element={<Lessons />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/bookText" element={<Text />} />
            <Route path="/audio" element={<AudioBooks />} />
          </Routes>
        </Layout>
      ) : (
        <>
          <Routes>
            <Route path="*" element={<Redirect where={"/login"} />} />
            <Route
              path="/login"
              element={
                <AuthForm>
                  <Login />
                </AuthForm>
              }
            />
            <Route
              path="/register"
              element={
                <AuthForm>
                  <Register />
                </AuthForm>
              }
            />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;



