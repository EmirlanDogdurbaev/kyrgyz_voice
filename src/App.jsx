import "./App.css";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Grammar from "./pages/Grammar/Grammar";
import Books from "./pages/Books/Books";
import Book from "./components/Book/Book";
import Text from "./pages/Books/Text";
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/grammatic" element={<Grammar/>} />
          <Route path="/books" element={<Books/>} />
          <Route path="/books/bookText" element={<Text/>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
